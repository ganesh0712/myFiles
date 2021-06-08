import React, { useState } from 'react'
import useCountervalue from './useCountervalue'

function CounterA() {
    /* const [count, setcount] = useState(0);
    const increment=()=>{
        setcount(precount=>precount+1)
    } */
    /* const increment=()=>{
        //setcount(precount=>precount+1)
        alert("hiii")
        count=count+1;
        console.log(count)
    } */
   const [count,increment]= useCountervalue(100,10)
   function add(){
   // const [count,increment]= useCountervalue(100,10)
   }
    return (
        <div>
            <h1> counterA- count- {count}</h1>
           <button onClick={increment}>count- {count} times</button>   
        </div>
    )
}

export default CounterA
