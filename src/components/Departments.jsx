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
    <div className="w-full flex flex-col bg-blue-200">
      <div className="flex flex-col items-center py-8">
        <p className="text-blue-950 text-2xl font-semibold">Departments</p>
        <p className="text-blue-900 text-xl mt-4">
          View all Departments Records.
        </p>
      </div>
      <ul className="w-full flex gap-4 justify-start items-center list-none text-white">
        <button onClick={()=>setDepartment("All")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">All Departments</button>
        <button onClick={()=>setDepartment("Management")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Management</button>
        <button onClick={()=>setDepartment("IT")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">IT Departments</button>
        <button onClick={()=>setDepartment("Finance")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Finance Departments</button>
        <button onClick={()=>setDepartment("Security")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Security Departments</button>
        <button onClick={()=>setDepartment("Cleaners")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Cleaners Departments</button>
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
