import Banner from "../components/Banner";
import LatestVisa from "../components/LatestVisa";
import VisaEligibilityChecker from "../components/VisaEligibilityChecker";
import VisaTipsSection from "../components/VisaTipsSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto my-8">
                <LatestVisa></LatestVisa>
                <VisaTipsSection></VisaTipsSection>
                <VisaEligibilityChecker></VisaEligibilityChecker>
            </div>
        </div>
    );
};

export default Home;