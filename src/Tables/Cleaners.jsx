import { useEffect, useState } from "react";
import axios from "axios";

const Cleaners = () => {
  const [cleaners, setCleaners] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cleaners")
      .then((response) => {
        const data = response.data.cleaners;
        setCleaners(data);
        console.log("fetched cleaners:", data);
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
            <th className="border border-blue-900 bg-white px-4 py-2">Nrc</th>
            <th className="border border-blue-900 bg-white px-4 py-2">
              Salary
            </th>
            <th className="border border-blue-900 bg-white px-4 py-2">
              Account Number
            </th>
          </tr>
        </thead>
        <tbody>
          {cleaners.map((cleaners) => (
            <tr key={cleaners.id}>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {cleaners.name}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {cleaners.position}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {cleaners.email}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {cleaners.phone}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {cleaners.nrc}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {cleaners.salary}
              </td>
              <td className="border border-blue-900 bg-white px-4 py-2">
                {cleaners.account_no}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cleaners;
