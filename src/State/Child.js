import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick= {()=>props.hander("Pune")}> Child button</button>
        </div>
    )
}

export default Child
