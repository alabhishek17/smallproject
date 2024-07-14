import NAVBAR from "./navbar";
import BusinessDetails from "./details"
import POCDetails from "./product"
import Attachments from "./attachement";
import { BsBell } from "react-icons/bs";
import ADDVENDOR from "./addvendom";
function INDEX(){
    return(
        <div>
{/* <NAVBAR/>
<BusinessDetails/>
<POCDetails/>
<hr /> */}
 <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded shadow">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Manage Vendor</h1>
          <div className="space-x-2 flex items-center gap-2">
            {/* <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Save Draft</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button> */}
          <div>
          <BsBell />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtzEf8HPK7SwCCk4LH23114fk5npYDyBVxg&s" alt="" className=" w-9 rounded-full border-4" />
          </div>
            <div>
              <h4 className=" font-bold">Rohit Sharm</h4>
              <p className=" font-thin">rohit@gmail.com</p>
            </div>

          </div>
        </div>
        <hr />

          <ADDVENDOR/>

        <div className="flex space-x-4">
          <div className="w-3/4">

            <BusinessDetails />
            <POCDetails />
          </div>
          <div className="w-1/4">
            <Attachments />
          </div>
        </div>
      </div>
    </div>
</div>
    )
}
export default INDEX;