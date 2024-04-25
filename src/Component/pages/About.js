import { useState,useEffect} from "react"
import React from 'react'
import useLocalStorage from "../hooks/useLocalStorage"

function About() {
    const[name,setName]=useLocalStorage("" || "name")
    const[age,setAge]=useLocalStorage("" || "age")


  
   

   
  return (
    <div>
        <h1 style={{textAlign:"center"}}>About</h1>
        
        <div style={{textAlign:"center"}}>
          <p>Take input from the user</p>
        <p>
          <input type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </p>
        <p>
          <input type='text' placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
        </p>

     </div>
    </div>
  )
}

export default About