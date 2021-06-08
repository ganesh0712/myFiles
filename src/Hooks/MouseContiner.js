import React, { useState } from 'react'
import HooksMouse from './HooksMouse';

function MouseContiner() {
   const [display,setDisplay] =useState(true);
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>display value</button>
            {display && <HooksMouse/>}
        </div>
    )
}

export default MouseContiner
