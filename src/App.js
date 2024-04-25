import { useEffect, useState } from 'react';
import './App.css';
import Even from './Component/Even';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Navbar from './Component/Navbar';
import GetData from './Component/pages/GetData';
import User from './Component/pages/User';
import Performance from './Component/pages/Performance';
import Memo from './Component/Memo';
import UseCallback from './Component/UseCallback';


function App() {
  //to understand lazy intialization
  // const[count,setCount]=useState(getValue());//type1
  //lazy intialization is calling a function inside the usestate to intialize a variable

  // const[count,setCount]=useState(()=>getValue());//type2
  //in the above way we can avoid lazy intialization

  
  // function getValue(){
  //   console.log("getValue()")
  //   return 0;
  // }

  /*const[count,setCount]=useState(0);

  
  const handleincrement=()=>{
    setCount((prev)=>prev+1);
  }
  // console.log("page rendering")
  useEffect(()=>{
    console.log("Only going to be visible once")

  },[])
  
  useEffect(()=>{
   console.log("Count Changed")
  },[count])
  //[] by using this we can render component  only onec
  */
  return (
   <>

   {/* <button onClick={handleincrement}>Increment</button>
   <p>{count}</p>
   {count%2==0 && <Even/>} */}
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/get-data" element={<GetData/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/performance" element={<Performance/>}/>
        <Route path="/memo" element={<Memo/>}/>
        <Route path="/callback" element={<UseCallback/>}/>



        //way of creating the dynamic url




      </Routes>
    </Router>
   
   </>
  );
}

export default App;
