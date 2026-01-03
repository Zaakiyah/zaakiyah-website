import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { Chart01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';

interface NisaabData {
	id: string;
	gregorianDate: string;
	hijriDate: string;
	goldPricePerGram: string | number | null;
	silverPricePerGram: string | number | null;
	goldNisaabValue: string | number | null;
	silverNisaabValue: string | number | null;
	currency?: string;
}

interface SupportedCurrency {
	code: string;
	name: string;
	symbol: string;
	decimalPlaces: number;
}

// Currency mapping based on common country codes
const countryToCurrency: Record<string, string> = {
	NG: 'NGN',
	US: 'USD',
	GB: 'GBP',
	CA: 'CAD',
	AU: 'AUD',
	ZA: 'ZAR',
	KE: 'KES',
	GH: 'GHS',
	EG: 'EGP',
	SA: 'SAR',
	AE: 'AED',
	PK: 'PKR',
	BD: 'BDT',
	IN: 'INR',
	MY: 'MYR',
	ID: 'IDR',
	TR: 'TRY',
};

const NisaabPreview = () => {
	const [nisaabData, setNisaabData] = useState<NisaabData | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedCurrency, setSelectedCurrency] = useState<string>('NGN');
	const [supportedCurrencies, setSupportedCurrencies] = useState<SupportedCurrency[]>([]);
	const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
	const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// Get API URL from environment variable
	const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3010';
	const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL || 'http://localhost:3000';

	// Detect currency from browser locale
	useEffect(() => {
		const detectCurrency = () => {
			// Try to get currency from localStorage first
			const savedCurrency = localStorage.getItem('zaakiyah-website-currency');
			if (savedCurrency) {
				setSelectedCurrency(savedCurrency);
				return;
			}

			// Try to detect from browser locale
			try {
				const locale = navigator.language || (navigator as any).userLanguage;
				const region = locale.split('-')[1]?.toUpperCase();

				if (region && countryToCurrency[region]) {
					setSelectedCurrency(countryToCurrency[region]);
					return;
				}
			} catch (err) {
				console.error('Error detecting currency:', err);
			}

			// Default to NGN
			setSelectedCurrency('NGN');
		};

		detectCurrency();
	}, []);

	// Fetch supported currencies
	useEffect(() => {
		const fetchSupportedCurrencies = async () => {
			try {
				const response = await fetch(`${API_URL}/currency/supported`);
				if (response.ok) {
					const result = await response.json();
					if (result.data && Array.isArray(result.data)) {
						setSupportedCurrencies(result.data);
					}
				}
			} catch (err) {
				console.error('Error fetching supported currencies:', err);
			}
		};

		fetchSupportedCurrencies();
	}, [API_URL]);

	// Fetch Nisaab data when currency changes
	useEffect(() => {
		const fetchTodayNisaab = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const response = await fetch(
					`${API_URL}/nisaab/today?currency=${selectedCurrency}`
				);

				if (!response.ok) {
					throw new Error('Failed to fetch Nisaab data');
				}

				const result = await response.json();
				if (result.data) {
					setNisaabData(result.data);
				}
			} catch (err) {
				console.error('Error fetching Nisaab:', err);
				setError('Unable to load Nisaab data');
			} finally {
				setIsLoading(false);
			}
		};

		if (selectedCurrency) {
			fetchTodayNisaab();
			// Save to localStorage
			localStorage.setItem('zaakiyah-website-currency', selectedCurrency);
		}
	}, [API_URL, selectedCurrency]);

	// Calculate dropdown position when opening
	useEffect(() => {
		if (isCurrencyDropdownOpen && buttonRef.current) {
			const rect = buttonRef.current.getBoundingClientRect();
			// Use getBoundingClientRect for fixed positioning (viewport coordinates)
			setDropdownPosition({
				top: rect.bottom + window.scrollY + 4, // 4px gap, add scroll offset for portal
				left: rect.left + window.scrollX, // Align with button left edge, add scroll offset
			});
		}
	}, [isCurrencyDropdownOpen]);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsCurrencyDropdownOpen(false);
			}
		};

		if (isCurrencyDropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isCurrencyDropdownOpen]);

	const formatCurrency = (value: string | number | null): string => {
		if (value === null || value === undefined) return 'N/A';
		const numValue = typeof value === 'string' ? parseFloat(value) : value;
		if (isNaN(numValue)) return 'N/A';

		const currency = nisaabData?.currency || selectedCurrency;
		const currencyInfo = supportedCurrencies.find((c) => c.code === currency);

		// Try to format with the currency code
		try {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: currency,
				minimumFractionDigits: currencyInfo?.decimalPlaces || 0,
				maximumFractionDigits: currencyInfo?.decimalPlaces || 0,
			}).format(numValue);
		} catch {
			// Fallback to simple formatting
			return `${currencyInfo?.symbol || currency} ${numValue.toLocaleString('en-US', {
				minimumFractionDigits: currencyInfo?.decimalPlaces || 0,
				maximumFractionDigits: currencyInfo?.decimalPlaces || 0,
			})}`;
		}
	};

	const handleCurrencyChange = (currency: string) => {
		setSelectedCurrency(currency);
		setIsCurrencyDropdownOpen(false);
	};

	if (isLoading) {
		return (
			<div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-white/20">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-[#00939D]/20 rounded-lg animate-pulse" />
						<div>
							<div className="h-4 w-24 bg-slate-200 rounded animate-pulse mb-1" />
							<div className="h-3 w-32 bg-slate-200 rounded animate-pulse" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (error || !nisaabData) {
		return null; // Don't show anything if there's an error
	}

	return (
		<div
			className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group relative z-0"
			style={{ overflow: 'visible' }}
		>
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
					<div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#00939D] to-[#007A82] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
						<HugeiconsIcon
							icon={Chart01Icon}
							size={18}
							color="white"
							strokeWidth={2}
							className="sm:w-5 sm:h-5"
						/>
					</div>
					<div className="flex-1 min-w-0" style={{ overflow: 'visible' }}>
						<div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 flex-wrap">
							<p className="text-xs text-[#002828]/60 font-medium whitespace-nowrap">
								Today's Nisaab
							</p>
							{/* Currency Selector */}
							{supportedCurrencies.length > 0 && (
								<div
									className="relative flex-shrink-0"
									ref={dropdownRef}
									style={{ zIndex: 999999 }}
								>
									<button
										ref={buttonRef}
										type="button"
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
										}}
										className="flex items-center gap-0.5 sm:gap-1 px-1 sm:px-1.5 py-0.5 rounded text-xs font-semibold text-[#00939D] hover:bg-[#00939D]/10 transition-colors relative whitespace-nowrap"
										style={{ zIndex: 999999 }}
										title="Change currency"
									>
										<span className="text-[10px] sm:text-xs">
											{selectedCurrency}
										</span>
										<HugeiconsIcon
											icon={ArrowDown01Icon}
											size={10}
											color="currentColor"
											strokeWidth={2}
											className={`transition-transform ${
												isCurrencyDropdownOpen ? 'rotate-180' : ''
											}`}
										/>
									</button>
									{isCurrencyDropdownOpen &&
										createPortal(
											<div
												className="fixed bg-white dark:bg-slate-800 rounded-lg shadow-xl border-2 border-slate-200 dark:border-slate-700 max-h-64 overflow-y-auto min-w-[200px]"
												style={{
													zIndex: 999999,
													top: `${dropdownPosition.top}px`,
													left: `${dropdownPosition.left}px`,
												}}
											>
												{supportedCurrencies.map((currency) => (
													<button
														key={currency.code}
														type="button"
														onClick={(e) => {
															e.preventDefault();
															e.stopPropagation();
															handleCurrencyChange(currency.code);
														}}
														className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
															selectedCurrency === currency.code
																? 'bg-[#00939D]/10 text-[#00939D] font-semibold'
																: 'text-slate-700 dark:text-slate-300'
														}`}
													>
														<div className="flex items-center justify-between">
															<span>{currency.code}</span>
															<span className="text-xs text-slate-500 dark:text-slate-400">
																{currency.name}
															</span>
														</div>
													</button>
												))}
											</div>,
											document.body
										)}
								</div>
							)}
						</div>
						<div className="flex items-baseline gap-1.5 sm:gap-2 min-w-0">
							<p className="text-sm sm:text-base font-bold text-[#002828] truncate">
								{formatCurrency(nisaabData.goldNisaabValue)}
							</p>
							<span className="text-[10px] sm:text-xs text-[#002828]/50 flex-shrink-0">
								(Gold)
							</span>
						</div>
					</div>
				</div>
				<a
					href={`${WEB_APP_URL}/nisaab/history`}
					target="_blank"
					rel="noopener noreferrer"
					onClick={(e) => {
						// Don't trigger if clicking on currency dropdown
						if ((e.target as HTMLElement).closest('[data-currency-dropdown]')) {
							e.stopPropagation();
						}
					}}
					className="flex items-center gap-0.5 sm:gap-1 text-[#00939D] group-hover:gap-1 sm:group-hover:gap-2 transition-all flex-shrink-0 ml-1 sm:ml-2"
				>
					<span className="text-[10px] sm:text-xs font-semibold hidden xs:inline">
						View History
					</span>
					<span className="text-[10px] sm:text-xs font-semibold xs:hidden">View</span>
					<svg
						className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default NisaabPreview;
