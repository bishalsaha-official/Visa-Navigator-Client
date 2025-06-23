const AddVisa = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photo.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const age = form.age.value;
        const fee = form.fee.value;
        const visaValidity = form.visaValidity.value;
        const applicationMethod = form.applicationMethod.value;
        const description = form.description.value;
        const requiredDocuments = [];
        form.requiredDocuments.forEach((document) => {
            if (document.checked) {
                requiredDocuments.push(document.value);
            }
        });
        const newVisa = {
            photoUrl,
            countryName, 
            visaType, 
            processingTime, 
            age, 
            fee, 
            visaValidity, 
            applicationMethod, 
            description, 
            requiredDocuments
        }
        console.log(newVisa)
        fetch('http://localhost:5000/visas', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newVisa)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };

    return (
        <div className="p-8 bg-base-100 shadow-lg max-w-4xl mx-auto rounded-xl my-5">
            <h2 className="text-2xl font-bold mb-8 text-center">Add Visa Information</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Country Image */}
                <div className="col-span-1">
                    <label className="label">Country Image URL</label>
                    <input type="text" placeholder="Paste image URL" name="photo" className="input input-bordered w-full" />
                </div>

                {/* Country Name */}
                <div className="col-span-1">
                    <label className="label">Country Name</label>
                    <input type="text" placeholder="e.g. Canada" name="countryName" className="input input-bordered w-full" />
                </div>

                {/* Visa Type Dropdown */}
                <div className="col-span-1">
                    <label className="label">Visa Type</label>
                    <select name="visaType" className="select select-bordered w-full">
                        <option disabled selected>Choose Visa Type</option>
                        <option>Tourist visa</option>
                        <option>Student visa</option>
                        <option>Official visa</option>
                    </select>
                </div>

                {/* Processing Time */}
                <div className="col-span-1">
                    <label className="label">Processing Time</label>
                    <input type="text" name="processingTime" placeholder="e.g. 10 working days" className="input input-bordered w-full" />
                </div>

                {/* Age Restriction */}
                <div className="col-span-1">
                    <label className="label">Age Restriction</label>
                    <input type="number" name="age" placeholder="e.g. 18" className="input input-bordered w-full" />
                </div>

                {/* Fee */}
                <div className="col-span-1">
                    <label className="label">Visa Fee ($)</label>
                    <input type="number" name="fee" placeholder="e.g. 100" className="input input-bordered w-full" />
                </div>

                {/* Validity */}
                <div className="col-span-1">
                    <label className="label">Visa Validity</label>
                    <input type="text" name="visaValidity" placeholder="e.g. 6 months" className="input input-bordered w-full" />
                </div>

                {/* Application Method */}
                <div className="col-span-1">
                    <label className="label">Application Method</label>
                    <input type="text" name="applicationMethod" placeholder="e.g. Online, Embassy" className="input input-bordered w-full" />
                </div>

                {/* Required Documents (Checkboxes) */}
                <div className="md:col-span-2">
                    <label className="label">Required Documents</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <label className="flex items-center gap-2">
                            <input name='requiredDocuments' type="checkbox" defaultValue="Valid passport" className="checkbox checkbox-sm" />
                            Valid passport
                        </label>
                        <label className="flex items-center gap-2">
                            <input name='requiredDocuments' type="checkbox" defaultValue="Visa application form" className="checkbox checkbox-sm" />
                            Visa application form
                        </label>
                        <label className="flex items-center gap-2">
                            <input name='requiredDocuments' type="checkbox" defaultValue="Recent passport-sized photograph" className="checkbox checkbox-sm" />
                            Recent passport-sized photograph
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                    <label className="label">Description</label>
                    <textarea className="textarea textarea-bordered w-full" name="description" rows="4" placeholder="Write a short description..."></textarea>
                </div>

                {/* Add Visa Button */}
                <div className="md:col-span-2">
                    <button className="btn btn-primary w-full">Add Visa</button>
                </div>
            </form>
        </div>
    );
};

export default AddVisa;