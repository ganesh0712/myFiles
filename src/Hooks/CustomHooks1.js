import React, { useState } from 'react'
import CustomHooks from './CustomHooks';

function CustomHooks1() {
    const [count , setCount]= useState(3);
        CustomHooks(count)


    return (
        <div>
            <button onClick={()=> setCount(count+1)}>count : {count}</button>
        </div>
    )
}

export default CustomHooks1
