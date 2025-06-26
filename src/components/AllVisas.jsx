import { useContext, useState } from "react";
import VisaCard from "./VisaCard";
import { VisaContext } from "../providers/VisaProvider";

const AllVisa = () => {
    const { visas } = useContext(VisaContext)
    const [selectedType, setSelectedType] = useState("All Visa");

    const handleFilterChange = (e) => {
        setSelectedType(e.target.value);
    };

    // Filter visas based on selected type
    const filteredVisas = selectedType === "All Visa" ? visas : visas.filter((visa) => visa.visaType === selectedType);

    return (
        <div className="max-w-7xl mx-auto my-8">
            <h2 className="text-center text-white font-bold text-4xl my-6 bg-blue-400 p-6 rounded-3xl">ALL VISA</h2>
            <div>
                <h3 className="font-bold text-xl mb-3 text-gray-700">Select Your Visa Type:</h3>
                <select onChange={handleFilterChange} value={selectedType} className="select">
                    <option>All Visa</option>
                    <option>Student visa</option>
                    <option>Tourist visa</option>
                    <option>Official visa</option>
                </select>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    (filteredVisas.length > 0)
                        ?
                        filteredVisas.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)
                        :
                        <p className="text-center col-span-full text-red-500 font-semibold">No visa found for selected type.</p>
                }
            </div>
        </div>
    );
};

export default AllVisa;