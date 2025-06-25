import { useContext, useEffect, useState } from "react";
import { VisaContext } from "../providers/VisaProvider";
import AddVisaCard from "./AddVisaCard";
import { AuthContext } from "../providers/AuthProvider";

const MyAddedVisa = () => {
    const { user } = useContext(AuthContext)
    const { visas, setVisas } = useContext(VisaContext)

    const [myAddVisa, setMyAddVisa] = useState([])

    useEffect(() => {
        setMyAddVisa(visas.filter((v) => v?.email === user?.email));
    }, []);

    return (
        <div className="max-w-7xl mx-auto my-8">
            <h2 className="text-center text-white font-bold text-4xl my-6 bg-blue-400 p-6 rounded-3xl">My Added Visa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    myAddVisa.map(visa => <AddVisaCard key={visa._id} visa={visa}></AddVisaCard>)
                }
            </div>
        </div>
    );
};

export default MyAddedVisa; 