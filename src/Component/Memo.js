import React, { useState,memo } from 'react'
import MemoChild from './MemoChild';

const MemoizationMemoChild=memo(MemoChild)
  //without memo function every time we change the text
  // the component of memochild is re rendering
function Memo() {
    const[count,setCount]=useState(0);
    const[name,setName]=useState("")
  
//memo will stop the redering of the components if the props not changed 
  return (
    <div style={{alignItems:"center"}}>
        <p>
            <input type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </p>
        <button onClick={()=>setCount(count+1)}>Increment(+1)</button>
        
        <MemoizationMemoChild count={count}/>
        //every time the count value changes then only the MemoChild is rendering

    </div>
  )
}

export default Memo