import Swal from "sweetalert2";

const ApplicationVisaCard = ({ visa }) => {
    const { _id, photoUrl, countryName, visaType, fee, processingTime, applicationMethod, visaValidity, appliedDate, email } = visa;

    // Delete Function
    const handleRemove = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/appliedvisa/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been Removed.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                    <div className="flex justify-between">
                        <span className="font-medium">Email:</span>
                        <span>{email}</span>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleRemove(_id)} className="btn btn-primary w-full">Remove Item</button>
                </div>
            </div>
        </div>
    );
};

export default ApplicationVisaCard;