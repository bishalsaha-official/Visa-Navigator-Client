import { useContext } from "react";
import VisaCard from "./VisaCard";
import { VisaContext } from "../providers/VisaProvider";

const AllVisa = () => {
    const { visas } = useContext(VisaContext)
    return (
        <div className="max-w-7xl mx-auto my-8">
            <h2 className="text-center text-white font-bold text-4xl my-6 bg-blue-400 p-6 rounded-3xl">ALL VISA</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    visas.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisa;