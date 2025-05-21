import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import WhyChooseZaakiyah from './components/home/WhyChooseZaakiyah';
import HowZaakiyahSimplifiesGiving from './components/home/HowZaakiyahSimplifiesGiving';
import ImpactStories from './components/home/ImpactStories';
import HowItWorks from './components/home/HowItWorks';
import FAQ from './components/home/FAQ';
import AppDownload from './components/home/AppDownload';

function App() {
	return (
		<Layout>
			<Hero />
			<WhyChooseZaakiyah />
			<HowZaakiyahSimplifiesGiving />
			<ImpactStories />
			<HowItWorks />
			<FAQ />
			<AppDownload />
		</Layout>
	);
}

export default App;
