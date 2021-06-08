import { useState } from "react";


/* function useCountervalue(defaultValue=0,payload=1) {
    const [count, setcount] = useState(defaultValue);
    const increment=()=>{
        setcount(precount=>precount+payload)
    }
   return [count,increment]
} */


 const useCountervalue = (defaultValue=0,payload=1) => {
 const [count, setcount] = useState(defaultValue);
    const increment=()=>{
        setcount(precount=>precount+payload)
    }
   return [count,increment]
} 



export default useCountervalue
