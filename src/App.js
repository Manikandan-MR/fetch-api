import React,{useState} from "react";
import axios from "axios";
import React from "react";

function App(){
  const[data,setData]=useState([]);
 const fetchData=()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos',
    {params:{
      id:11
    }}
    )
    .then(response=>{
      setData(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  };
  return(
    <div>
      <h1>Json PlaceHolder</h1>
      <button onClick={fetchData}>Fetch</button>
        {data &&(
          <ol>
            {data.map(item=>
            <li>{item.title}</li>
            )}
            {data.map(item=>
            <li>{item.url}</li>
            )}
          </ol>
        )}
    </div>
  );
}
export default App;
