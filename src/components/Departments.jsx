import { useState } from "react";
import AllDepartments from "../Tables/AllDepartments";
import Management from "../Tables/Management";
import IT from "../Tables/IT";
import Finance from "../Tables/Finance";
import Security from "../Tables/Security";
import Cleaners from "../Tables/Cleaners";

const Departments = () => {
  const [department, setDepartment] = useState("All");
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col bg-blue-200 rounded">
        <div className="flex flex-col items-center py-8">
          <p className="text-blue-950 text-2xl font-semibold">Departments</p>
          <p className="text-blue-900 text-xl mt-4">
            View all Departments Records.
          </p>
        </div>
        <ul className="w-full flex gap-4 justify-start px-2 py-4 items-center list-none text-white bg-blue-200">
          <button
            onClick={() => setDepartment("All")}
            className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
              department === "All" ? "bg-blue-600" : ""
            }`}
          >
            All Departments
          </button>
          <button
            onClick={() => setDepartment("Management")}
            className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
              department === "Management" ? "bg-blue-600" : ""
            }`}
          >
            Management
          </button>
          <button
            onClick={() => setDepartment("IT")}
            className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
              department === "IT" ? "bg-blue-600" : ""
            }`}
          >
            IT Departments
          </button>
          <button
            onClick={() => setDepartment("Finance")}
            className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
              department === "Finance" ? "bg-blue-600" : ""
            }`}
          >
            Finance Departments
          </button>
          <button
            onClick={() => setDepartment("Security")}
            className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
              department === "Security" ? "bg-blue-600" : ""
            }`}
          >
            Security Departments
          </button>
          <button
            onClick={() => setDepartment("Cleaners")}
            className={`py-3 px-2 rounded hover:bg-blue-900 bg-blue-950 cursor-pointer ${
              department === "Cleaners" ? "bg-blue-600" : ""
            }`}
          >
            Cleaners Departments
          </button>
        </ul>
      </div>
      <div className="mt-4 justify-start items-center w-full flex bg-white">
        {department === "All" ? <AllDepartments /> : null}
        {department === "Management" ? <Management /> : null}
        {department === "IT" ? <IT /> : null}
        {department === "Finance" ? <Finance /> : null}
        {department === "Security" ? <Security /> : null}
        {department === "Cleaners" ? <Cleaners /> : null}
      </div>
    </div>
  );
};

export default Departments;
