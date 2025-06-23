import { useContext, } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";
import { AuthContext } from "../providers/AuthProvider";

const AllVisa = () => {
    const loadedVisa = useLoaderData()
    const {visas, setVisas} = useContext(AuthContext)
    setVisas(loadedVisa)
    return (
        <div className="max-w-7xl mx-auto">
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