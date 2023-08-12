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
    <div className="w-full flex justify-center items-center">
      <table>
        <thead>
            <th>Name</th>
            <th>Number of Employees</th>
        </thead>
        <tbody>
        {departments.map((department) => (
            <tr key={department.id}>
              <td className="border border-gray-300 px-4 py-2">{department.Name}</td>
              <td className="border border-gray-300 px-4 py-2">{department.Number_of_employees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDepartments;
