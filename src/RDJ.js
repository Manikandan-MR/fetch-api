import { useEffect, useState } from "react";

const sampledata=[
    {name:"RDJ", age:52,friends:"100+",gf:100},
    {name:"Henry Cavill", age:38,friends:"100+",gf:100},
    {name:"Gal Gadot", age:34 ,friends:"100+",gf:0},
    {name:"Grant gustin", age:32 ,friends:"0",gf:100},
    {name:"Sadie Sink", age:22 ,friends:"100+",gf:0},
];
function RDJ(){
    const[data,setData]=useState([]);
    const[item,setItem]=useState();
    useEffect(()=>{
        console.log("use Effect Called...")
        setTimeout(()=>{
            setData(sampledata);
        },2000)
    },[item])
    useEffect(()=>{
        setTimeout(()=>{
            setItem(Math.random());
        },4000)
    },[])
    return(
        <table>
            <thead>
            <tr>
                <th>Actors</th>
                <th>Age</th>
                <th>Friends</th>
                <th>Girl Friends</th>
            </tr>
            </thead>
            <tbody>
            {data.length===0 && <td>Loading...</td>}
            {data.map(dat=>(
            <tr>
                <td>{dat.name}</td>
                <td>{dat.age}</td>
                <td>{dat.friends}</td>
                <td>{dat.gf}</td>
            </tr>
            ))}
            </tbody>
        </table>
    )
}
export default RDJ;