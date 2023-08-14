import { useState } from "react";
import AllDepartments from "../Tables/AllDepartments";
import Management from '../Tables/Management';
import IT from '../Tables/IT';
import Finance from '../Tables/Finance';
import Security from '../Tables/Security';
import Cleaners from '../Tables/Cleaners';

const Departments = () => {
  const[department,setDepartment]=useState('')
  return (
    <div className="w-full h-screen flex flex-col bg-blue-200">
      <div className="flex flex-col items-center py-8">
        <p className="text-blue-950 text-2xl font-semibold">User Settings</p>
      </div>
      <ul className="w-full flex gap-4 justify-center items-center list-none text-white">
        <button onClick={()=>setDepartment("All")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Profile</button>
        <button onClick={()=>setDepartment("Management")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Password</button>
        <button onClick={()=>setDepartment("IT")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Team</button>
        <button onClick={()=>setDepartment("Finance")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Permissions</button>
        <button onClick={()=>setDepartment("Security")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Security</button>
        <button onClick={()=>setDepartment("Security")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Privacy</button>
        <button onClick={()=>setDepartment("Cleaners")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Activity Log</button>
      </ul>
      <div className="mt-4">
        {department==="All"?(<AllDepartments/>):null}
        {department==="Management"?(<Management/>):null}
        {department==="IT"?(<IT/>):null}
        {department==="Finance"?(<Finance/>):null}
        {department==="Security"?(<Security/>):null}
        {department==="Cleaners"?(<Cleaners/>):null}
      </div>
    </div>
  );
};

export default Departments;
