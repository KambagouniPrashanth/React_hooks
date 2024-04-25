import React, { useEffect, useState } from 'react'

function callbackChild({getItems}) {
    const[items,setItems]=useState([]);

    console.log("callbackchild rendering")

    useEffect(()=>{
        setItems(getItems())

    },[getItems])


  return (
    <div>
        <h1>callbackChild</h1>
        {items.map((item,i)=>(
            <p key={i}>{item}</p>
        ))}
    </div>
  )
}

export default callbackChild