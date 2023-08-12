import { useEffect, useState } from 'react';
import axios from 'axios';

const Security = () => {
    const[security,setSecurity]=useState({});

    useEffect(()=>{
        axios.get("http://localhost:3000/security").then((response)=>{
            const data = response.data.security;
            setSecurity(data);
            console.log("fetched securities:",data);
        }).catch((error) => {
            console.log(error);
          });
    },[]);
    
  return (
    <div className="flex w-full justify-center items-center">
        <table>
            <thead>
                <th>Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Nrc</th>
                <th>Salary</th>
                <th>Account Number</th>
            </thead>
            <tbody>
                {security.map((security)=>(
                    <tr key={security.id}>
                        <td>{security.name}</td>
                        <td>{security.position}</td>
                        <td>{security.email}</td>
                        <td>{security.phone}</td>
                        <td>{security.nrc}</td>
                        <td>{security.salary}</td>
                        <td>{security.account_no}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Security