import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//useParams is used get the dynamic data of links

function User() {
    let {id}=useParams();
    const[user,setUser]=useState(null);

    const fetchUser=async()=>{
        try{
            let url=`https://jsonplaceholder.typicode.com/users/${id}`
            let response=await axios.get(url)
            console.log(response.data)
            setUser(response.data)

        }catch(e){
            console.log(e.message)
        }
       

    }
    useEffect(()=>{
        fetchUser();
    },[])
   
  return (
    <div style={{textAlign:"center"}}>
        <p>User Infomation</p>
        <p>User ID: {user?.id}</p>
        <p>User Name: {user?.name}</p>
        <p>User Email: {user?.email}</p>


    </div>
  )
}

export default User