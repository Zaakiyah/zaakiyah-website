import FAQ from '../common/FAQ';
import { faqItems } from '../../data/faqData';

const HomeFAQ = () => {
	return <FAQ items={faqItems} limit={5} />;
};

export default HomeFAQ;
