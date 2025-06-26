import { useContext, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const VisaDetails = () => {
    const data = useLoaderData()
    const [visa, setVisa] = useState(data[0])
    const { countryName, photoUrl, processingTime, visaValidity, applicationMethod } = visa;
    const location = useLocation()
    const { user } = useContext(AuthContext)
    const [successMessage, setSuccessMessage] = useState('')
    console.log(user)

    const handleApplyVisa = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const appliedDate = form.appliedDate.value;
        const fee = form.fee.value;
        const newApplyVisa = { email, firstName, lastName, appliedDate, fee, countryName, photoUrl, processingTime, visaValidity, applicationMethod }
        console.log(newApplyVisa)

        fetch('https://visa-navigator-server-kohl.vercel.app/appliedvisa', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newApplyVisa)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setSuccessMessage("Your Application is Successfully Done")
                }
            })
    }

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
                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-primary btn-wide">Apply for the Visa</button>
            </div>
            <dialog id='my_modal_3' className="modal ">
                <div className="modal-box">
                    <h2 className="text-primary font-bold text-2xl text-center">Apply For The Visa</h2>
                    <form onSubmit={handleApplyVisa} className="space-y-4 bg-white p-6 ">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label font-medium">Email</label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                        </div>

                        <div className="flex flex-col md:flex-row md:gap-4">
                            {/* First Name */}
                            <div className="form-control w-full">
                                <label className="label font-medium">First Name</label>
                                <input type="text" name="firstName" placeholder="Enter your first name" className="input input-bordered w-full" required />
                            </div>

                            {/* Last Name */}
                            <div className="form-control w-full">
                                <label className="label font-medium">Last Name</label>
                                <input type="text" name="lastName" placeholder="Enter your last name" className="input input-bordered w-full" required />
                            </div>
                        </div>

                        {/* Applied Date */}
                        <div className="form-control">
                            <label className="label font-medium">Applied Date</label>
                            <input type="text" name="appliedDate" defaultValue={user?.metadata?.creationTime} className="input input-bordered w-full" readOnly />
                        </div>

                        {/* Visa Fee */}
                        <div className="form-control">
                            <label className="label font-medium">Visa Fee</label>
                            <input type="text" name="fee" defaultValue={visa.fee} className="input input-bordered w-full" readOnly />
                        </div>

                        {/* Apply Button */}
                        <div className="form-control">
                            <button type="submit" className="btn btn-primary w-full">Apply Now</button>
                        </div>
                    </form>
                    <div>
                        <form method="dialog" className="space-y-4 bg-white px-6">
                            <button className="btn btn-accent w-full text-white">Close</button>
                        </form>
                        <p className="text-center mt-3 text-xl text-primary">{successMessage ? successMessage : ''}</p>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default VisaDetails;

