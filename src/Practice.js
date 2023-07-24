import React, { useEffect, useState } from "react";
const sampledata=[
    {name:"RDJ", age:52,friends:"100+",gf:100},
    {name:"Henry Cavill", age:38,friends:"100+",gf:100},
    {name:"Gal Gadot", age:34 ,friends:"100+",gf:0},
    {name:"Grant gustin", age:32 ,friends:"0",gf:100},
    {name:"Sadie Sink", age:22 ,friends:"100+",gf:0},
];
function Practice(){
    const[data,setData]=useState([]);
    const[item,setItem]=useState();
    useEffect(()=>{
        setTimeout(()=>{
            setData(sampledata);
        },2000);
    })
    const handleData=()=>{
        setItem("Loading...")
        setTimeout(()=>{
            setItem("Hello Mr Manikandan...")
        },2000);
    }
    return(
        <>
        {data.length===0 &&<td><h2>Loading....</h2></td>}
        {data.map(item=>
            <tr>
                <td>{item.name}</td>,
                <td>{item.age}</td>,
                <td>{item.friends}</td>,
                <td>{item.gf}</td>
            </tr>
            )}
        <button onClick={handleData}>Fetch</button>
        <h3>{item}</h3>
        </>
    )
}
export default Practice;