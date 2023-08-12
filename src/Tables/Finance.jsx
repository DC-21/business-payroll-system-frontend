import { useEffect, useState } from "react"
import axios from 'axios'


const Finance = () => {
    const [finance,setFinance]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/finance").then((response)=>{
            const data = response.data.finance;
            setFinance(data);
            console.log("fetched finances:",data)
        }).catch((error) => {
            console.log(error);
          });
    },[])
  return (
    <div className="w-full flex justify-center items-center">
        <table>
            <thead>
                <th className="border border-blue-900 bg-white px-4 py-2">Name</th>
                <th className="border border-blue-900 bg-white px-4 py-2">Position</th>
                <th className="border border-blue-900 bg-white px-4 py-2">Email</th>
                <th className="border border-blue-900 bg-white px-4 py-2">Phone</th>
                <th className="border border-blue-900 bg-white px-4 py-2">Nrc</th>
                <th className="border border-blue-900 bg-white px-4 py-2">Salary</th>
                <th className="border border-blue-900 bg-white px-4 py-2">Account Number</th>
            </thead>
            <tbody>
            {finance.map((finance) => (
            <tr key={finance.id}>
              <td className="border border-blue-900 bg-white px-4 py-2">{finance.name}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{finance.position}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{finance.email}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{finance.phone}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{finance.nrc}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{finance.salary}</td>
              <td className="border border-blue-900 bg-white px-4 py-2">{finance.account_no}</td>
            </tr>
          ))}
            </tbody>
        </table>
    </div>
  )
}

export default Finance