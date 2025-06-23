import Banner from "../components/Banner";
import VisaEligibilityChecker from "../components/VisaEligibilityChecker";
import VisaTipsSection from "../components/VisaTipsSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VisaTipsSection></VisaTipsSection>
            <VisaEligibilityChecker></VisaEligibilityChecker>
        </div>
    );
};

export default Home;