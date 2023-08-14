import axios from "axios";
import { useEffect, useState } from "react";

const AllDepartments = () => {
    const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/department")
      .then((response) => {
        const data = response.data.departments;
        setDepartments(data);
        console.log("fetched data:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div className="w-full flex justify-start px-2 items-center">
      <table>
        <thead>
            <th className="border border-blue-900 bg-white px-4 py-2">Name</th>
            <th className="border border-blue-900 bg-white px-4 py-2">H.o.D</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Number of Employees</th>
        </thead>
        <tbody>
        {departments.map((department) => (
            <tr key={department.id}>
              <td className="border border-blue-900 bg-white px-4 py-2">{department.Name}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{department.HoD}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{department.Number_of_employees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDepartments;
