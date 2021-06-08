import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function SinglePostFetch() {
    const [id, setid] = useState(1)
   //const id=77;
    const [post, setpost] = useState({});
    const [error, seterror] = useState("");
    const [id1, setid1] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id1}`)
        .then(res=>{
            console.log(res);
            setpost(res.data)
        })
        .catch(err=>{
            console.log(err);
            seterror("error occur!!!!!!!!!")
       })
       
        
    },[id1])
    const handler=()=>{
setid1(id);
    }
    return (
        <div>
            <h1>list of posts</h1>
    <h1 style={{color:'red'}}>{error}</h1>

<input type="text" value={id} onChange={e=>setid(e.target.value)}/>
<button onClick={handler}>Fetch Data</button>

    <h1>{post.id} {post.title}</h1>
  
        </div>
    )
}

export default SinglePostFetch
