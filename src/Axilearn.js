import axios from "axios";
import { useEffect, useState } from "react";

function Axilearn(){
    const[data,setData]=useState([]);
    const[user,setUser]=useState("");
    const[name,setName]=useState("");
    const[trigger,setTrigger]=useState(false);
    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(response=>setData(response.data))
},[]);
    const postData=()=>{
        axios.post(`https://jsonplaceholder.typicode.com/posts`,{name:name})
        .then(response=>setData(...user,response.data))
        .then(()=>setTrigger(!trigger))
    }
    return(
        <>
        <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
        <button onClick={postData}>Add</button>
        {data && (
            <ol>
               {data.map(res=><li>{res.title}</li>)}
               {data.map(res=><li>{res.body}</li>)}
            </ol>
        )}
        </>
    )
}
export default Axilearn;