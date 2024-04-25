import React, { useEffect } from 'react'

function Even() {
    //Mount
    useEffect(()=>{
        console.log("Mounting Even Component")
        //unMount
       let interval=setInterval(()=>{
            console.log("Even Component is Still there")

        },1000)
        return(()=>{
            console.log("Even Component is removed(UnMounting) from the screen")
            clearInterval(interval);
        })

    },[])
  return (
    <div>Even Component</div>
  )
}

export default Even