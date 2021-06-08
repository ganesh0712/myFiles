import React, { useState } from 'react'

function HooksObject() {

    const [name, setName] = useState({ firstName: 'Ganesh', lastName: 'Dhake' })
    const handler1 = (e) => {
        setName({ ...name, firstName: e.target.value });
    }
    const handler2 = (e) => {
        setName({ ...name, lastName: e.target.value });
    }
    return (
        <form>

            firstName: <input type="text" placeholder="Enter firstName" value={name.firstName} onChange={handler1} /><br />
            LastName: <input type="text" placeholder="Enter lastName" value={name.lastName} onChange={handler2} />
            <h2>your first Name: {name.firstName}</h2>
            <h2>your last Name: {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>

        </form>
    )
}

export default HooksObject
