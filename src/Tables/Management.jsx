import { useEffect, useState } from "react";
import axios from "axios";

const Management = () => {
  const [management, setManagement] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/management")
      .then((response) => {
        const data = response.data.management;
        setManagement(data);
        console.log("fetched management:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex w-full justify-start px-2 items-center">
      <table>
        <thead>
          <tr>
            <th className="border border-blue-900 bg-white px-4 py-2">Name</th>
            <th className="border border-blue-900 bg-white px-4 py-2">
              Position
            </th>
            <th className="border border-blue-900 bg-white px-4 py-2">Email</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Phone</th>
            <th className="border border-blue-900 bg-white px-4 py-2">NRC</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Phone</th>
            <th className="border border-blue-900 bg-white px-4 py-2">
              Account Number
            </th>
          </tr>
        </thead>
        <tbody>
          {management.map((management) => (
            <tr key={management.id}>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {management.name}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {management.position}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {management.email}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {management.phone}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {management.nrc}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {management.salary}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {management.account_no}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Management;
