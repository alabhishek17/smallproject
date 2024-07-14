import { FaRegBell } from "react-icons/fa";
function NAVBAR() {
    return (
        <div className=" flex justify-between">
            <div className=" font-bold">
                <h1>Manage Vendor</h1>
            </div>
            <div className=" flex gap-3 text-center items-center">
                <div>
                <FaRegBell />
                </div>
                <div>
                <img src="" alt="" />
                <h5>Rohit sharm</h5>
                <p>rohit@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default NAVBAR;