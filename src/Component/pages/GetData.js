import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function GetData() {
    const[users,setUsers]=useState([])
    const fetchUsers=async()=>{
        try{
            let url="https://jsonplaceholder.typicode.com/users"
            let response=await fetch(url);
            let result=await response.json();
            setUsers(result)
            console.log(result)

        }catch(e){
            console.log(e.message)
        }
       

    }
    useEffect(()=>{
    fetchUsers()
    },[])
    return (
        <div>
            <h1 style={{textAlign:"center"}}>GetData</h1>
            <div className='users' style={{textAlign:"center"}}>


                {users.map((user,i)=>(
                    <p key={i}>
                        <Link to={`/user/${user.id}`} key={i}>{user.name}</Link>

                    </p>
                ))}

            </div>
        </div>
    )
}

export default GetData