import React, { useState, useEffect ,useContext} from "react";
import { Navigate} from "react-router-dom";
import {store} from '../routes/Routers';
import axios from 'axios';

function Page() {
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);

      useEffect(() =>{
    axios.get('http://localhost:6060/myprofile',{
        headers: {
            'x-token' : token
        }
    }).then(res => setData(res.data)).catch((err) => console.log(err))
  })
  console.log(token)
  if(!token){
      return <Navigate to='/home' />
  }
  return (
    <div>
         {
                data &&
                <span>
                <span><h5>Hi!{data.username}</h5></span>
               <span><button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button></span>
            </span>
               
              }
    </div>
  )
}

export default Page