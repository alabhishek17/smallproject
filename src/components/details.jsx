const BusinessDetails = () => {
    return (
      <div className="mb-6">
      <h2 className="text-lg font-bold mb-4 border-b pb-2">Business Details</h2>
      <div className="grid grid-cols-4 gap-4">
        <input type="text" className="border p-2" placeholder="Vendor ID" />
        <select className="border p-2">
          <option>India</option>
          <option>USA</option>
        </select>
        <select className="border p-2">
          <option>VendorALL</option>
        </select>
        <select className="border p-2">
          <option>Packaging</option>
        </select>
        <select className="border p-2">
          <option>International</option>
        </select>
        <input type="text" className="border p-2" placeholder="Vendor Name" />
        <select className="border p-2">
          <option>USD</option>
          <option>INR</option>
        </select>
        <div className="flex items-center">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <input type="date" className="border p-2" />
        <input type="date" className="border p-2" />
        <input type="text" className="border p-2" placeholder="Payment Terms" />
        <select className="border p-2">
          <option>Bangalore</option>
          <option>Mumbai</option>
        </select>
        <input type="text" className="border p-2" placeholder="Vendor GST" />
        <input type="file" className="border p-2" />
        <input type="file" className="border p-2" />
      </div>
    </div>
    );
  };
  
  export default BusinessDetails;