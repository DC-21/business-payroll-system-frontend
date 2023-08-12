import { useEffect, useState } from "react";
import axios from 'axios';

const Management = () => {
    const[management, setManagement]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/management").then((response)=>{
          const data = response.data.management;
          setManagement(data);
          console.log("fetched management:", data);
        }).catch((error) => {
          console.log(error);
        });
    },[]);

  return (
    <div>
      <table>
        <thead>
            <th className="border border-blue-900 bg-white px-4 py-2">Name</th>
            <th className="border border-blue-900 bg-white px-4 py-2">H.o.D</th>
            <th className="border border-blue-900 bg-white px-4 py-2">Number of Employees</th>
        </thead>
        <tbody>
        {management.map((management) => (
            <tr key={management.id}>
              <td className="border border-blue-900 bg-white px-4 py-2">{management.Name}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{management.HoD}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{management.Number_of_employees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Management