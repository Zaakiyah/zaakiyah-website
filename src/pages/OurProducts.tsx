import { PageHeader } from '../components/common/PageHeader';
import { InfoCard } from '../components/common/InfoCard';
import { Calculator01Icon } from '@hugeicons/core-free-icons';
import FAQ from '../components/home/FAQ';

export function OurProducts() {
	return (
		<>
			<PageHeader
				title="Our Products"
				subtitle="Comprehensive solutions for managing your zakaat and charitable giving"
			>
				<div className="mt-30"></div>
			</PageHeader>

			{/* Mission & Vision Section */}
			<section className="py-20 px-6">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<InfoCard
						icon={Calculator01Icon}
						title="Our Mission"
						description="To simplify Zakaat calculation and distribution while ensuring compliance with Islamic principles."
					/>
					<InfoCard
						icon={Calculator01Icon}
						title="Our Vision"
						description="Transparency, accuracy, and adherence to Islamic principles guide everything we do."
					/>
				</div>
			</section>

			{/* Who We Are Section */}
			<section className="bg-[#00939D]/8 py-20 px-6">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-6">
					<h2 className="text-[48px] font-bold mb-2 md:mb-0 md:w-1/3 text-[#030712] tracking-tighter leading-tight">
						Who Are We?
					</h2>
					<p className="text-base md:text-[24px] text-[#002828] md:w-2/3 font-medium leading-[46px] text-justify">
						We established in 2018 with license from CBN and insured by NDIC with thes
						same insurance coverage like other commercial banks, committed to deepening
						financial inclusion through technology and enabling shared prosperity.
						Zaakiyah is a one-stop Zakaat financial service platform for payments,
						transfers, donations, and other essential services for users, provides the
						best help service for agents and acquiring service for merchant currently
						Zaakiyah boasts of over tens of millions of users, agents and merchants in
						Nigeria.
					</p>
				</div>
			</section>

			{/* Our Impact Section */}
			<section className="py-20 px-6">
				<div className="max-w-7xl mx-auto bg-[#00939D]/8 rounded-2xl shadow-sm px-6 py-18 text-center border border-[#00939D]/20">
					<h2 className="text-2xl md:text-[36px] font-bold mb-2 text-[#012022] tracking-tight">
						Our Impact
					</h2>
					<p className="text-base md:text-[28px] font-medium text-[#012022]/60 mb-8 max-w-3xl mx-auto">
						Through our platform, we've helped thousands of Muslims fulfill their Zakaat
						obligations and support those in need.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
						<div>
							<div className="text-2xl md:text-[48px] font-extrabold text-[#00939D]">
								₦30M+
							</div>
							<div className="text-xs md:text-[20px] font-medium text-[#012022]/60 mt-1">
								Donations Processed
							</div>
						</div>
						<div>
							<div className="text-2xl md:text-[48px] font-extrabold text-[#00939D]">
								250+
							</div>
							<div className="text-xs md:text-[20px] font-medium text-[#012022]/60 mt-1">
								Active Donors
							</div>
						</div>
						<div>
							<div className="text-2xl md:text-[48px] font-extrabold text-[#00939D]">
								200+
							</div>
							<div className="text-xs md:text-[20px] font-medium text-[#012022]/60 mt-1">
								Lives Impacted
							</div>
						</div>
						<div>
							<div className="text-2xl md:text-[48px] font-extrabold text-[#00939D]">
								99.9%
							</div>
							<div className="text-xs md:text-[20px] font-medium text-[#012022]/60 mt-1">
								Success Rate
							</div>
						</div>
					</div>
				</div>
			</section>

			<FAQ />
		</>
	);
}
