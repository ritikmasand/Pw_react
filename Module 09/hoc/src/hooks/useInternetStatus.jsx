import { useState, useEffect } from "react";

const useInternetStatus = () => {
  const [status, setStatus] = useState(true);
    
  const intertOn = () =>{
    setStatus(true)
  }
   
  const intertOff = () => {
    setStatus(false);
  };

 useEffect(()=>{
    window.addEventListener('online',intertOn)
    window.addEventListener('offline',intertOff)

 },[])
 return status
};

export default useInternetStatus;