import { useEffect, useState } from "react";
import axios from 'axios'

const IT = () => {
    const[it,setIt]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/it").then((response)=>{
            const data = response.data.it;
            setIt(data);
            console.log("fetched it:", data);
        }).catch((error) => {
            console.log(error);
        });
    },[]);
  return (
    <div className="w-full flex flex-col justify-start px-2 items-center">
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
                { it.map((it)=>(
                    <tr key={it.index}>
                        <td className="border border-blue-900 bg-white px-4 py-2">{it.name}</td>
                        <td className="border border-blue-900 bg-white px-4 py-2">{it.position}</td>
                        <td className="border border-blue-900 bg-white px-4 py-2">{it.email}</td>
                        <td className="border border-blue-900 bg-white px-4 py-2">{it.phone}</td>
                        <td className="border border-blue-900 bg-white px-4 py-2">{it.nrc}</td>
                        <td className="border border-blue-900 bg-white px-4 py-2">{it.salary}</td>
                        <td className="border border-blue-900 bg-white px-4 py-2">{it.account_no}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default IT;