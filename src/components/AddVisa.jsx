const AddVisa = () => {
    return (
        <div className="p-8 bg-base-100 shadow-lg max-w-4xl mx-auto rounded-xl my-5">
            <h2 className="text-2xl font-bold mb-8 text-center">Add Visa Information</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Country Image */}
                <div className="col-span-1">
                    <label className="label">Country Image URL</label>
                    <input type="text" placeholder="Paste image URL" className="input input-bordered w-full" />
                </div>

                {/* Country Name */}
                <div className="col-span-1">
                    <label className="label">Country Name</label>
                    <input type="text" placeholder="e.g. Canada" className="input input-bordered w-full" />
                </div>

                {/* Visa Type Dropdown */}
                <div className="col-span-1">
                    <label className="label">Visa Type</label>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Choose Visa Type</option>
                        <option>Tourist visa</option>
                        <option>Student visa</option>
                        <option>Official visa</option>
                    </select>
                </div>

                {/* Processing Time */}
                <div className="col-span-1">
                    <label className="label">Processing Time</label>
                    <input type="text" placeholder="e.g. 10 working days" className="input input-bordered w-full" />
                </div>

                {/* Age Restriction */}
                <div className="col-span-1">
                    <label className="label">Age Restriction</label>
                    <input type="number" placeholder="e.g. 18" className="input input-bordered w-full" />
                </div>

                {/* Fee */}
                <div className="col-span-1">
                    <label className="label">Visa Fee ($)</label>
                    <input type="number" placeholder="e.g. 100" className="input input-bordered w-full" />
                </div>

                {/* Validity */}
                <div className="col-span-1">
                    <label className="label">Visa Validity</label>
                    <input type="text" placeholder="e.g. 6 months" className="input input-bordered w-full" />
                </div>

                {/* Application Method */}
                <div className="col-span-1">
                    <label className="label">Application Method</label>
                    <input type="text" placeholder="e.g. Online, Embassy" className="input input-bordered w-full" />
                </div>

                {/* Required Documents (Checkboxes) */}
                <div className="md:col-span-2">
                    <label className="label">Required Documents</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            Valid passport
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            Visa application form
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            Recent passport-sized photograph
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                    <label className="label">Description</label>
                    <textarea className="textarea textarea-bordered w-full" rows="4" placeholder="Write a short description..."></textarea>
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