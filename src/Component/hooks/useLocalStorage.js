import { useEffect, useState } from "react";

//custom hook
//function based component
function useLocalStorage(intialvalue,name){
    const[value,setValue]=useState(localStorage.getItem(name) || intialvalue)

    useEffect(()=>{
        localStorage.setItem(name,value)

    },[value])

    return[value,setValue]

}
export default useLocalStorage;