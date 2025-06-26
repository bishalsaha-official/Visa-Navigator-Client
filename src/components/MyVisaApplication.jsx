import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ApplicationVisaCard from "./ApplicationVisaCard";
import { AuthContext } from "../providers/AuthProvider";

const MyVisaApplication = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const [myVisa, setMyVisa] = useState(data)

    useEffect(() => {
        const filterData = data.filter((v) => v?.email === user?.email)
        setMyVisa(filterData);
    }, []);

    return (
        <div className="max-w-7xl mx-auto my-8">
            <h2 className="text-center text-white font-bold text-4xl my-6 bg-blue-400 p-6 rounded-3xl">My Visa Application</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    myVisa.map(visa => <ApplicationVisaCard key={visa._id} visa={visa}></ApplicationVisaCard>)
                }
            </div>
        </div>
    );
};

export default MyVisaApplication;