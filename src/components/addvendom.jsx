import { FaArrowLeftLong } from "react-icons/fa6";
// import { MdKeyboardArrowRight } from "react-icons/md";
function ADDVENDOR() {
    return (
        <div className=" flex justify-between mt-2 mb-2">
            <div className=" flex items-center gap-3">
            <FaArrowLeftLong />
                <h2 className=" font-bold">Add Vendor(Business)</h2>
                <button className=" border-2 px-5 py-2 border-solid rounded-full text-center text-blue-600 bg-blue-100">Open</button>
            </div>
            <div className=" flex gap-3">
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Save Draft</button>
                
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit ></button>
                
            </div>
        </div >
    )
}
export default ADDVENDOR;