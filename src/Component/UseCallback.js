import { useCallback, useState } from "react"
import React from 'react'
import callbackChild from "./callbackChild"

function UseCallback() {
    const[theme,setTheme]=useState("dark")
    const[number,setNumber]=useState(0)

    
    
    const styles={
        backgroundColor:theme==="dark"?"black":"white",
        color:theme==="dark"?"white":"black",
        padding:"1rem",
        margin:"5px"
    }
    const toggleTheme=()=>{
        setTheme(theme=="dark"?"light":"dark")
    }

    const getItems=useCallback(()=>{
        const num=parseInt(number,10);
        return[num,num+1,num+2];
    },[number])
  return (
    <div>
        <input type='number' onChange={(e)=>setNumber(e.target.value)}/>
        <div style={styles}>
            <p>Title</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

        </div>
        <button style={{padding:"0.2rem"}} onClick={toggleTheme}>Toggle</button>
       <callbackChild getItems={getItems}/>
    </div>
  )
}

export default UseCallback