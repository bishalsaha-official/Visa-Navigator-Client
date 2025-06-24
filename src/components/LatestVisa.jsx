import { useContext } from "react";
import { VisaContext } from "../providers/VisaProvider";
import VisaCard from "./VisaCard";
import { Link } from "react-router-dom";

const LatestVisa = () => {
    const { visas } = useContext(VisaContext)
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center text-primary mb-2">Latest Visas</h2>
                <p className="text-center text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">Explore the most recently added visa opportunities with essential details like fees, processing time, and validity.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    visas.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
            </div>
            <div>
                <Link to="/allvisa" className="btn bg-base-200 w-full text-center text-blue-700 font-bold">Show All</Link>
            </div>
        </div>
    );
};

export default LatestVisa;