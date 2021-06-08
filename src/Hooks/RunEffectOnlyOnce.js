import React, { useState,useEffect } from 'react'

function RunEffectOnlyOnce() {
    const [x, setX] = useState(0);
    const [Y, setY] = useState(0);
   const  logMousePosition=e=>{
        setX(e.clientX);
        setY(e.clientY);
        console.log("mouse event");
       }
       useEffect(()=>{
           console.log("useEffect....");
            window.addEventListener('mousemove',logMousePosition);
     return ()=>{
    window.removeEventListener('mousemove',logMousePosition);
    console.log("compoent unmounting code.....")
     }
    },[])
    
  
    return (
        <div>
           Hooks - X -{x}  Y- {Y}
        </div>
    )
}

export default RunEffectOnlyOnce 
 