import React from "react";

const VisaTipsSection = () => {
    const tips = [
        {
            title: "5 Common Visa Application Mistakes to Avoid",
            points: [
                "Double-check all documents before submission.",
                "Avoid incomplete application forms.",
                "Use a recent passport-size photo.",
                "Ensure your passport is valid for at least 6 months.",
                "Never provide false information.",
            ],
        },
        {
            title: "Top Countries with Easy Tourist Visa Approval",
            points: [
                "Thailand offers easy eVisa for many nationalities.",
                "Sri Lanka's ETA system is fast and simple.",
                "Malaysia grants visa-free entry to many countries.",
                "UAE offers quick online visa application.",
                "Singapore has a smooth tourist visa process.",
            ],
        },
        {
            title: "How to Track Your Visa Application Status",
            points: [
                "Use the official visa tracking portal or app.",
                "Keep your application reference number handy.",
                "Check your email regularly for updates.",
                "Contact the embassy if there's a delay.",
                "Avoid third-party tracking sites unless verified.",
            ],
        },
    ];

    return (
        <section className="bg-white py-10 px-4 md:px-16">
            <h2 className="text-2xl font-bold mb-6 text-center">📰 Visa Tips & Travel News</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                            {tip.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VisaTipsSection;
