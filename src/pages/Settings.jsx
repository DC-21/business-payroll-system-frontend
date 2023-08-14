import { useState } from "react";
import AllDepartments from "../Tables/AllDepartments";
import Management from '../Tables/Management';
import IT from '../Tables/IT';
import Finance from '../Tables/Finance';
import Security from '../Tables/Security';
import Cleaners from '../Tables/Cleaners';

const Departments = () => {
  const[settings,setSettings]=useState('')
  return (
    <div className="w-full h-screen flex flex-col bg-blue-200">
      <div className="flex flex-col items-center py-8">
        <p className="text-blue-950 text-2xl font-semibold">User Settings</p>
      </div>
      <ul className="w-full flex gap-4 justify-start px-2 items-center list-none text-white">
        <button onClick={()=>setSettings("All")} className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
            settings === "All" ? 'bg-blue-600' : ''
          }`}>Profile</button>
        <button onClick={()=>setSettings("Management")} className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
            settings === "Management" ? 'bg-blue-600' : ''
          }`}>Password</button>
        <button onClick={()=>setSettings("IT")} className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
            settings === "IT" ? 'bg-blue-600' : ''
          }`}>Team</button>
        <button onClick={()=>setSettings("Finance")} className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
            settings === "Finance" ? 'bg-blue-600' : ''
          }`}>Permissions</button>
        <button onClick={()=>setSettings("Security")} className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
            settings === "Security" ? 'bg-blue-600' : ''
          }`}>Security</button>
        <button onClick={()=>setSettings("Security")} className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
            settings === "Security" ? 'bg-blue-600' : ''
          }`}>Privacy</button>
        <button onClick={()=>setSettings("Cleaners")} className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
            settings === "Cleaners" ? 'bg-blue-600' : ''
          }`}>Activity Log</button>
      </ul>
      <div className="mt-4">
        {settings==="All"?(<AllDepartments/>):null}
        {settings==="Management"?(<Management/>):null}
        {settings==="IT"?(<IT/>):null}
        {settings==="Finance"?(<Finance/>):null}
        {settings==="Security"?(<Security/>):null}
        {settings==="Cleaners"?(<Cleaners/>):null}
      </div>
    </div>
  );
};

export default Departments;
