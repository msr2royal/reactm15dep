import React, { useState } from 'react'

const OnClick = () => {
    const [data,setData] = useState('');
  return (
    <div>
        <h1>OnClick Component</h1> 
        <button className='btn btn-primary' onClick={()=>setData('Onclick is working')}>OnClick</button> 
        <h2 style={{color:'red'}}>{data}</h2>
    </div>
  )
}

export default OnClick;