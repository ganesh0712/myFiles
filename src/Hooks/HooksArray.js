 import React, { useState } from 'react'
/* 
  function HooksArray() {
    const [items,setItems]=useState([1,2,3,4]);

    return (
        <div>
           <button  >Add a number</button> 
    {items.map((item,i)=>(<h1 key={i}>{item}</h1>))}
        </div>
    )
}  */  
  /*  function HooksArray() {
    const [items,setItems]=useState([]);

    return (
        <div>
           <button  >Add a number</button> 
     {
            items.length!==0?(items.map((item,i)=>(<h1 key={i}>{item}</h1>))):(<h1 style={{color:'red'}}>array empty</h1>)
        }
        </div>
    )
}  */  
 
function HooksArray() {
    const [items,setItems]=useState([]);
    const [flag,setFlag]= useState(false);
    const [name,setName]= useState("Hello react!!!!");
    const addNumber=()=>{
        setItems([
            ...items,{
                id:items.length+1,
                value:Math.floor(Math.random()*10)+1
            }
        ]);
        setFlag({flag:true});
    }
    const changeMsg=()=>{
        setName("Thank you")
    }

    return (
        <div>
           <button onClick={addNumber} >Add a number</button> 
     {
            items.length!==0?(items.map((item)=>(<h1 key={item.id}>{item.id} {item.value}</h1>))):(<h1>array empty</h1>)
        }
     {flag?"hello":"bye"} <br/>
     <button onClick={changeMsg}>changeMsg</button><br/>
     {name}

        </div>
    )
}




export default HooksArray
