import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import WhyChooseZaakiyah from './components/home/WhyChooseZaakiyah';
import HowZaakiyahSimplifiesGiving from './components/home/HowZaakiyahSimplifiesGiving';
import ImpactStories from './components/home/ImpactStories';

function App() {
	return (
		<Layout>
			<Hero />
			<WhyChooseZaakiyah />
			<HowZaakiyahSimplifiesGiving />
			<ImpactStories />
			{/* Other sections will go here */}
		</Layout>
	);
}

export default App;
