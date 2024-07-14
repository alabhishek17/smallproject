const POCDetails = () => {
    return (
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4 border-b pb-2">Point of Contact (POC)</h2>
        <div className="grid grid-cols-3 gap-4">
          <select className="border p-2">
            <option>Finance</option>
          </select>
          <input type="text" className="border p-2" placeholder="POC Designation" />
          <input type="email" className="border p-2" placeholder="POC Email ID" />
          <input type="tel" className="border p-2" placeholder="POC Mobile Number" />
          <button className="bg-blue-100 text-blue-600 py-2 px-4 rounded hover:bg-blue-600">
            + Add one more POC
          </button>
        </div>
      </div>
    );
  };
  
  export default POCDetails;