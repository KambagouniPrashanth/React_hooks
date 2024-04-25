import React, { useMemo, useState } from 'react'

function UseMemo() {
    const[theme,setTheme]=useState("dark")
    const[number,setNumber]=useState(0)

    const getDubbleNumber=()=>{
        for(let i=0;i<10000;i++){
            console.log("hi")
        }
        return number*2
    }
    //use memo stop the redering of function
    const dobble=useMemo(()=>getDubbleNumber(),[number]);
    
    const styles={
        backgroundColor:theme==="dark"?"black":"white",
        color:theme==="dark"?"white":"black",
        padding:"1rem",
        margin:"5px"
    }
    const toggleTheme=()=>{
        setTheme(theme=="dark"?"light":"dark")
    }
  return (
    <div>
        <input type='number' onChange={(e)=>setNumber(e.target.value)}/>
        <div style={styles}>
            <p>Title</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>

        </div>
        <button style={{padding:"0.2rem"}} onClick={toggleTheme}>Toggle</button>
        <p>
            Number:{dobble}
        </p>
       
    </div>
  )
}

export default UseMemo