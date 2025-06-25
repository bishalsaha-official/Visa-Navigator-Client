const ApplicationVisaCard = ({ visa }) => {
    const { photoUrl,  countryName, visaType, fee, processingTime, applicationMethod, visaValidity, appliedDate} = visa;
    return (
        <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
            <figure>
                <img src={photoUrl} alt={countryName} className="h-48 w-full object-cover" />
            </figure>

            <div className="card-body px-6 py-4 space-y-3">
                <h2 className="card-title text-2xl font-bold text-primary">
                    {countryName}
                </h2>

                <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <span className="font-medium">Visa Type:</span>
                        <span>{visaType}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Fee:</span>
                        <span>{fee}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Processing Time:</span>
                        <span>{processingTime}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Application Method:</span>
                        <span>{applicationMethod}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Validity:</span>
                        <span>{visaValidity}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Applied Date:</span>
                        <span>{appliedDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationVisaCard;