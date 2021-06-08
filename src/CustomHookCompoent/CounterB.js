import React from 'react'
import { useState } from 'react';
import useCountervalue from './useCountervalue';

function CounterB() {
    /* const [count, setcount] = useState(0);
    const increment=()=>{
        setcount(precount=>precount+1)
    } */
   const [count,increment]=useCountervalue(50,5)
    return (
        <div>
             <h1> counterB- count- {count}</h1>
          <button onClick={increment}>count- {count} times</button>  
        </div>
    )
}

export default CounterB
