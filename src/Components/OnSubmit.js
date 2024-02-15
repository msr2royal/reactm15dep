import React, { useState } from 'react'
import axios from 'axios';
const OnSubmit = () => {
    const [data,setData] = useState({
        username:'',
        password:''
    });
    const { username, password} =data;

    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("https://react-contact-107e2-default-rtdb.firebaseio.com/user.json",data)
        .then(()=>alert("Data Submitted Successfully!"))
        // setData({
        //     username:'',
        //     password:''
        // });  
      
        //  console.log(data);

    }

  return (
    <div>
        <h1>OnSubmit / Login / SignUp Component!</h1> 
           <form onSubmit={submitHandler}>
           <div className='col-6'>
                <input type="text" name="username" onChange={changeHandler} value={username} placeholder="Enter Name"
                className='form-control'/>
                <div>
                   <span className='text-danger fw-bold'>{username==="" ? "Username is required" : null}</span>
                </div>
                <div> 
                   <span className='text-danger fw-bold'>{username.length<=4 ? "Username should be 4 characters" : null}</span>
                </div>
            </div> 

            <div className='col-6'>
                <input type="text" name="password"onChange={changeHandler} value={password} placeholder="Enter Name"
                className='form-control'/>
                  <div>
                   <span className='text-danger fw-bold'>{password==="" ? "password is required" : null}</span>
                </div>
                <div> 
                   <span className='text-danger fw-bold'>{password.length<=4 ? "password should be 4 characters" : null}</span>
                </div>
            </div> 

            <div className='col-4'>
                <input type="submit" name="submit" className='btn btn-success'/>
            </div>  
           </form>
    </div>
  )
}

export default OnSubmit; 