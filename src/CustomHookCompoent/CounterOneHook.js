import React from 'react'
import useCounter from './useCounter'

function CounterOneHook() {
   // const [count,increment,decrement,reset] =useCounter()
   //const [count,increment,decrement,reset] =useCounter(10)
   const [count,increment,decrement,reset] =useCounter(5,2)
    return (
        <div>
            <h1>{count}</h1>
          <button onClick={increment}>Increment</button>  
          <button onClick={decrement}>Decrement</button> 
          <button onClick={reset}>Reset</button> 
        </div>
    )
}

export default CounterOneHook

