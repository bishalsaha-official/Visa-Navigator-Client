const MyAddedVisa = () => {
    return (
        <div className="p-8 bg-base-100 shadow-lg max-w-3xl mx-auto rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">🛂 Add Visa Information</h2>

      <form className="space-y-4">
        {/* Country Image */}
        <div>
          <label className="label">Country Image URL</label>
          <input type="text" placeholder="Paste image URL from imgbb" className="input input-bordered w-full" />
        </div>

        {/* Country Name */}
        <div>
          <label className="label">Country Name</label>
          <input type="text" placeholder="e.g. Canada" className="input input-bordered w-full" />
        </div>

        {/* Visa Type Dropdown */}
        <div>
          <label className="label">Visa Type</label>
          <select className="select select-bordered w-full">
            <option disabled selected>Choose Visa Type</option>
            <option>Tourist visa</option>
            <option>Student visa</option>
            <option>Official visa</option>
          </select>
        </div>

        {/* Processing Time */}
        <div>
          <label className="label">Processing Time</label>
          <input type="text" placeholder="e.g. 10 working days" className="input input-bordered w-full" />
        </div>

        {/* Required Documents (Checkboxes) */}
        <div>
          <label className="label">Required Documents</label>
          <div className="flex flex-col gap-2">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              Valid passport
            </label>
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              Visa application form
            </label>
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              Recent passport-sized photograph
            </label>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea className="textarea textarea-bordered w-full" placeholder="Write a short description..."></textarea>
        </div>

        {/* Age Restriction */}
        <div>
          <label className="label">Age Restriction</label>
          <input type="number" className="input input-bordered w-full" placeholder="e.g. 18" />
        </div>

        {/* Fee */}
        <div>
          <label className="label">Visa Fee ($)</label>
          <input type="number" className="input input-bordered w-full" placeholder="e.g. 100" />
        </div>

        {/* Validity */}
        <div>
          <label className="label">Visa Validity</label>
          <input type="text" className="input input-bordered w-full" placeholder="e.g. 6 months" />
        </div>

        {/* Application Method */}
        <div>
          <label className="label">Application Method</label>
          <input type="text" className="input input-bordered w-full" placeholder="e.g. Online, Embassy" />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button className="btn btn-primary w-full">Add Visa</button>
        </div>
      </form>
    </div>
    );
};

export default MyAddedVisa;