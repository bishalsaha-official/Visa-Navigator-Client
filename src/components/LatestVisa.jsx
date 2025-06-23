import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import VisaCard from "./VisaCard";

const LatestVisa = () => {
    const { visas, setVisas } = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-primary mb-2">Latest Visas</h2>
            <p className="text-center text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
                Explore the most recently added visa opportunities with essential details like fees, processing time, and validity.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    visas.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
            </div>
        </div>
    );
};

export default LatestVisa;