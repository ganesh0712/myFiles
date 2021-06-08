/*  import { useState } from "react";

function useCounter() {
    const [count, setcount] = useState(0);

    const increment=()=>{
        setcount(preCount=>preCount+1);
    }
    const decrement=()=>{
        setcount(preCount=>preCount-1);
    }
    const reset=()=>{
        setcount(0)
    }
    return [count,increment,decrement,reset]
}

export default useCounter  */
/* 
//inital count
 import { useState } from "react";

function useCounter(intialCount=0) {
    const [count, setcount] = useState(intialCount);

    const increment=()=>{
        setcount(preCount=>preCount+1);
    }
    const decrement=()=>{
        setcount(preCount=>preCount-1);
    }
    const reset=()=>{
        setcount(intialCount)
    }
    return [count,increment,decrement,reset]
}

export default useCounter  */
// inital count and paramter i.e value
 import { useState } from "react";

function useCounter(intialCount=0,value) {
    const [count, setcount] = useState(intialCount);

    const increment=()=>{
        setcount(preCount=>preCount+value);
    }
    const decrement=()=>{
        setcount(preCount=>preCount-value);
    }
    const reset=()=>{
        setcount(intialCount)
    }
    return [count,increment,decrement,reset]
}

export default useCounter 
