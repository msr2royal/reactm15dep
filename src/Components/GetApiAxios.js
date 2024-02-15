import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetApiAxios = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>setData(response.data))
    },[]);
  return (
    <div>
        <h1>GetApiAxios Component</h1>
        <div>
            {
                data.map(data=><li key={data.id}>{data.title}</li>)
            }
        </div>
    </div>
  )
}

export default GetApiAxios;