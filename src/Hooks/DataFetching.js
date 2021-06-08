import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setposts] = useState([]);
    const [error, seterror] = useState("")
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            console.log(res);
            setposts(res.data)
        }) .catch(err=>{
            console.log(err);
            seterror("error occur!!!!!!!!!")
       })
        
    },[])
    return (
        <div>
            <h5>list of posts</h5>
    <h1 style={{color:'red'}}>{error}</h1>
    {posts.length!==0 &&posts.map(post=>(<h5 key={post.id}>{post.id}: {post.title}</h5>))}
        </div>
    )
}

export default DataFetching

