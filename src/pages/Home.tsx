import Hero from '../components/home/Hero';
import WhyChooseZaakiyah from '../components/home/WhyChooseZaakiyah';
import HowZaakiyahSimplifiesGiving from '../components/home/HowZaakiyahSimplifiesGiving';
import ImpactStories from '../components/home/ImpactStories';
import HowItWorks from '../components/home/HowItWorks';
import FAQ from '../components/home/FAQ';
import AppDownload from '../components/home/AppDownload';
import { SEO } from '../components/common/SEO';

export function Home() {
	return (
		<>
			<SEO
				title="Home"
				description="Transform lives through giving. Calculate your Zakaat, make donations, and track your impact with Zaakiyah - the modern platform for Islamic giving."
				keywords="Zakaat calculator, Islamic giving, Sadaqah, Muslim charity, Zakaat donation, Islamic finance, Shariah compliant giving"
			/>
			<Hero />
			<WhyChooseZaakiyah />
			<HowZaakiyahSimplifiesGiving />
			<ImpactStories />
			<HowItWorks />
			<FAQ />
			<AppDownload />
		</>
	);
}
