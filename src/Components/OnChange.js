import React, { useState } from 'react'

const OnChange = () => {
    const [name,setName] = useState(''); 
    const changeHandler=(e)=>{
        setName(e.target.value);
    }
  return (
    <div>
        <h1>OnChange Component!</h1>
       <div className='form-group row col-12'>
       <div className='col-4'>
       <input type="text" name="name"onChange={changeHandler} value={name} placeholder="Enter Name"
         className='form-control'/>
       </div>
       </div>
        <p style={{color:'green',fontSize:'30px',fontWeight:'bold'}}>{name}</p>
    </div>
  )
}

export default OnChange;