import React, { useEffect, useState } from "react";

function ABS(){
    const [resource,setResource]=useState('posts');
    const[item,setItem]=useState([]);

    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then(response=>response.json())
    .then(res=>setItem(res))
},[resource])
    return(
        <>
        <div>
            <button onClick={()=>setResource("posts")}>posts</button>
            <button onClick={()=>setResource("users")}>users</button>
            <button onClick={()=>setResource("comments")}>comments</button>
        </div>
        <h1>{resource}</h1>
        {item.map(emt=><pre>{JSON.stringify(emt)}</pre>)}  
        </>
    )
}
export default ABS;