import React,{useState,useEffect} from 'react'
import Even from '../Even';

function Home() {
    const[count,setCount]=useState(0);
   


  
    const handleincrement=()=>{
      setCount((prev)=>prev+1);
    }

   
    // console.log("page rendering")
    useEffect(()=>{
      console.log("Only going to be visible once")
  
    },[])
        //[] by using this we can render component  only onec

    
    /*useEffect(()=>{
     console.log("Count Changed")
    },[count])*/
    //every time the count changes it is rendering
    return (
     <>
    <h1 style={{textAlign:"center"}}>Home</h1>

     <button onClick={handleincrement}>Increment</button>
     <p>{count}</p>
    
     {count%2==0 && <Even/>}

    
     
   
     </>
    )
}

export default Home