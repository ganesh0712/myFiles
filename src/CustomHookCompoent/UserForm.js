/* import React, { useState } from 'react'

function UserForm() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const submitHandler=(e)=>{
e.preventDefault();
alert(`Hello ${firstName}  ${lastName}`);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default UserForm
 */


import React, { useState } from 'react'
import useInput from './useInput';

function UserForm() {
    const [firstName,bindFirstName,restFirstName] =useInput('')
    const [lastName,bindlastName,restlastName] =useInput('')
    const [mail,bindmail,restmail] =useInput('')
    const submitHandler=(e)=>{
            e.preventDefault();
            alert(`Hello ${firstName}  ${lastName} ${mail}`);
            restFirstName()
            restlastName()
            restmail()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...bindlastName}/>
                </div>
                <div>
                    <label>mail</label>
                    <input type="text" {...bindmail}/>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default UserForm
