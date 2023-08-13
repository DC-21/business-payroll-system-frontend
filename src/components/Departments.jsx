import { useState } from "react";
import AllDepartments from "../Tables/AllDepartments";
// import Security from "../Tables/Security";
import { Link } from 'react-router-dom';
import Management from '../Tables/Management';

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
      <ul className="w-full flex gap-4 justify-center items-center list-none text-white">
        <button onClick={()=>setDepartment("All")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">All Departments</button>
        <button onClick={()=>setDepartment("Management")} className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Management</button>
        <Link to="/it-department" className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">IT Departments</Link>
        <Link to="/finance-department" className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Finance Departments</Link>
        <Link to="/security-department" className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Security Departments</Link>
        <Link to="/cleaners-department" className="py-3 px-2 rounded bg-blue-950 hover:bg-blue-900 cursor-pointer">Cleaners Departments</Link>
      </ul>
      <div className="mt-4">
        {department==="All"?(<AllDepartments/>):null}
        {department==="Management"?(<Management/>):null}
      </div>
    </div>
  );
};

export default Departments;
