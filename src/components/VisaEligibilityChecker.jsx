import React, { useState } from "react";

const VisaEligibilityChecker = () => {
    const [country, setCountry] = useState("");
    const [visaType, setVisaType] = useState("");
    const [age, setAge] = useState("");
    const [result, setResult] = useState("");

    const handleCheck = () => {
        if (!country || !visaType || !age) {
            setResult("Please fill all fields.");
            return;
        }

        if (parseInt(age) >= 18) {
            setResult("You're likely eligible to apply!");
        } else {
            setResult("You may not be eligible based on age.");
        }
    };

    return (
        <section className="bg-white py-10 px-4 md:px-16">
            <h2 className="text-2xl font-bold text-center mb-6"> Check Your Visa Eligibility in 1 Minute</h2>

            <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium">Select Country</label>
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full p-2 rounded border"
                    >
                        <option value="">Choose Country</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                        <option value="uk">UK</option>
                        <option value="germany">Germany</option>
                        <option value="Italy">Italy</option>
                        <option value="Austria">Austria</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="France">France</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Poland">Poland</option>
                        <option value="Finland">Finland</option>
                        <option value="Netherland">Netherland</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium">Select Visa Type</label>
                    <select
                        value={visaType}
                        onChange={(e) => setVisaType(e.target.value)}
                        className="w-full p-2 rounded border"
                    >
                        <option value="">Choose Visa Type</option>
                        <option value="tourist">Tourist</option>
                        <option value="student">Student</option>
                        <option value="work">Work</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium">Enter Your Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full p-2 rounded border"
                        placeholder="e.g. 24"
                    />
                </div>

                <button onClick={handleCheck} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Check Eligibility</button>
                {
                    result && (<p className="mt-4 text-center font-medium text-gray-800">{result}</p>)
                }
            </div>
        </section>
    );
};

export default VisaEligibilityChecker;
