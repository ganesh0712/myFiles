import React, { useState } from 'react'
import CustomHooks from './CustomHooks';


function CustomHooks2() {
    const [count , setCount]= useState(30)
        CustomHooks(count)


    return (
        <div>
            <button onClick={()=> setCount(count+5)}>count : {count}</button>
        </div>
    )
}
export default CustomHooks2
