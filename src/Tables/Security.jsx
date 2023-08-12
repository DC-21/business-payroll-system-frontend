import { useEffect, useState } from "react";
import axios from "axios";

const Security = () => {
  const [security, setSecurity] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/security")
      .then((response) => {
        const data = response.data.security;
        setSecurity(Object.values(data)); // Convert object values to array
        console.log("fetched securities:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex w-full justify-center items-center">
      <table>
        <thead>
          <tr>
            <th className="border border-blue-900 bg-white px-4 py-2">Name</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Position</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Email</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Phone</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Nrc</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Salary</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Account Number</th>
          </tr>
        </thead>
        <tbody>
          {security.map((security) => (
            <tr key={security.id}>
              <td className="border border-blue-900 bg-white px-4 py-2">{security.name}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{security.position}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{security.email}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{security.phone}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{security.nrc}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{security.salary}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{security.account_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Security;
