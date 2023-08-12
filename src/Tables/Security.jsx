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
    <div></div>
  )
}

export default Security