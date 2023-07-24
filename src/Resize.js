import React, { useEffect, useState } from "react";

function ResizeWin(){
    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);
    
    const handleSize=()=>setWidth(window.innerWidth);
    const handleSize1=()=>setHeight(window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize',handleSize);
        window.addEventListener('resize',handleSize1);

        return()=>{
        window.addEventListener('resize',handleSize)    
        }
    },[])
    return(
        <>
        <h1>{width}</h1>
        <h1>{height}</h1>
        </>
    )
}
export default ResizeWin;