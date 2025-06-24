import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
    const data = useLoaderData()
    const [visa, setVisa] = useState(data[0])
    return (
        <div className="max-w-6xl mx-auto p-6 md:p-10 bg-base-100">
            <img src={visa.photoUrl} alt={visa.countryName} className="w-full h-64 object-cover rounded-xl shadow-md" />
            <div className="grid md:grid-cols-2 gap-8 items-start mt-5">
                {/* Header Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3 text-primary">{visa.countryName} - {visa.visaType}</h2>
                    <p className="text-gray-600 text-sm mb-4">{visa.description}</p>
                    <div className="grid gap-3 text-sm text-gray-700">
                        <p><span className="font-semibold">Processing Time:</span>{" "}{visa.processingTime}</p>
                        <p><span className="font-semibold">Minimum Age:</span> {visa.age}+</p>
                        <p><span className="font-semibold">Visa Fee:</span> ${visa.fee}</p>
                        <p><span className="font-semibold">Validity:</span>{" "}{visa.visaValidity}</p>
                        <p><span className="font-semibold">Application Method:</span>{" "}{visa.applicationMethod}</p>
                    </div>
                </div>
                {/* Required Documents */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3 text-primary">Required Documents</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                        {
                            visa.requiredDocuments.map((doc, idx) => (
                                <li key={idx}>{doc}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* Apply Button */}
            <div className="mt-10 text-center">
                <button className="btn btn-primary btn-wide">Apply for the Visa</button>
            </div>
        </div>
    );
};

export default VisaDetails;