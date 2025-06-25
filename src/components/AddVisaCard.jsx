import { useState } from "react";
import Swal from "sweetalert2";

const AddVisaCard = ({ visa }) => {
    const [addVisa, setAddVisa] = useState(visa)
    const { _id, photoUrl, countryName, visaType, processingTime, fee, visaValidity, applicationMethod, email } = addVisa;

    // Delete Function
    const handleDelete = id => {
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
                fetch(`http://localhost:5000/visas/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            const remainsItem = addVisa.filter(item => item._id !== id)
                            setAddVisa(remainsItem)
                        }
                    })
            }
        });
    }

    // Handle Update
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const photoUrl = form.photoUrl.value
        const countryName = form.countryName.value
        const visaType = form.visaType.value
        const fee = form.value
        const processingTime = form.fee.value
        const applicationMethod = form.applicationMethod.value
        const visaValidity = form.visaValidity.value
        const updateItem = {
            photoUrl,
            countryName,
            visaType,
            fee,
            processingTime,
            applicationMethod,
            visaValidity,
        }

        fetch(`http://localhost:5000/visas/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
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
                </div>
                <div className="flex gap-3">
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="min-w-2/4 btn btn-primary mb-3">Update</button>
                    <button onClick={() => handleDelete(_id)} className="min-w-2/4 btn btn-primary">Delete</button>
                </div>
            </div>
            <dialog id='my_modal_3' className="modal ">
                <div className="modal-box">
                    <h2 className="text-primary font-bold text-2xl text-center">Update Your Information</h2>
                    <form onSubmit={handleUpdate} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
                        <div className="grid md:grid-cols-2 gap-5">
                            {/* Photo Url */}
                            <div className="form-control">
                                <label className="label font-medium">Photo Url</label>
                                <input type="text" name="photoUrl" defaultValue={photoUrl} className="input input-bordered w-full" />
                            </div>

                            {/* Country Name */}
                            <div className="form-control">
                                <label className="label font-medium">Country Name</label>
                                <input type="text" name="countryName" defaultValue={countryName} className="input input-bordered w-full" />
                            </div>

                            {/* Visa Type */}
                            <div className="form-control">
                                <label className="label font-medium">Visa Type</label>
                                <input type="text" name="visaType" defaultValue={visaType} className="input input-bordered w-full" />
                            </div>

                            {/* Fee */}
                            <div className="form-control">
                                <label className="label font-medium">Visa Fee</label>
                                <input type="text" name="fee" defaultValue={fee} className="input input-bordered w-full" />
                            </div>

                            {/* Processing Time */}
                            <div className="form-control">
                                <label className="label font-medium">Visa Validity</label>
                                <input type="text" name="processingTime" defaultValue={processingTime} className="input input-bordered w-full" />
                            </div>

                            {/* Application Method */}
                            <div className="form-control">
                                <label className="label font-medium">Application Method</label>
                                <input type="text" name="applicationMethod" defaultValue={applicationMethod} className="input input-bordered w-full" />
                            </div>

                            {/* Visa Validity */}
                            <div className="form-control">
                                <label className="label font-medium">Visa Validity</label>
                                <input type="text" name="visaValidity" defaultValue={visaValidity} className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* Apply Button */}
                        <div className="form-control">
                            <button type="submit" className="btn btn-primary w-full">Update Now</button>
                        </div>
                    </form>
                    <div>
                        <form method="dialog" className="space-y-4 bg-white px-6">
                            <button className="btn btn-accent w-full text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddVisaCard;