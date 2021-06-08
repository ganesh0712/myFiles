import React, { useState, useEffect } from 'react'

function HooksCounterOne() {
   const [count,setCount] =useState(0);
   const [name,setName]=useState('');

   useEffect(()=>{
       console.log("useEffect callled...........")
       document.title=`you clicked ${count} times`
   },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>UseEffect- click {count} times</button>
        </div>
    )
} 

export default HooksCounterOne
 