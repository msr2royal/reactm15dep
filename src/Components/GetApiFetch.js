import React, { useEffect, useState } from 'react';

const GetApiFetch = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json())
        .then(json=>setData(json));
    },[]);
  return (
    <div>
        <h1>GetApiFetch Component</h1>
        <div> 
            {
                data.map(data=><li key={data.id} type="none">{data.userId} - {data.id} - {data.title} - {data.completed}</li>)
            } 
        </div>
    </div>
  )
}

export default GetApiFetch;