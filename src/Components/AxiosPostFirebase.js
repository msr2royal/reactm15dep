import axios from 'axios';
import React,{useState} from 'react'

const AxiosPostFirebase = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    }); 
    const { username, email, password, confirmPassword} = data; 
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(username.length<=5 ){
            alert("Username must be at leat 5 characters!");
        } 
        else if(password !== confirmPassword){
            alert("Passwords are not matching!");
        } else{ 
            axios.post("https://react-contact-107e2-default-rtdb.firebaseio.com/user.json",data)
            .then(()=>alert("Data Submitted Successfully!"))
            // setData({
            //     username:'',
            //     password:''
            // });  
        }   
    }

  return (
    <div className='py-3'>
        <div className='card'>
            <div className='card-header'>
                <h1>AxiosPostFirebase Component</h1>
            </div>
            <div className='card-body'> 
                <form onSubmit={submitHandler}>
            <div className='col-4'>
                    <input type="text" name="username" onChange={changeHandler} value={username} placeholder="Enter Name"
                    className='form-control'/>
                </div>  

                <div className='col-4'>
                    <input type="email" name="email" onChange={changeHandler} value={email} placeholder="Enter Email"
                    className='form-control'/>
                </div>  

                <div className='col-4'>
                    <input type="text" name="password"onChange={changeHandler} value={password} placeholder="Enter Password"
                    className='form-control'/>
                </div>   

                <div className='col-4'>
                    <input type="text" name="confirmPassword"onChange={changeHandler} value={confirmPassword}
                    placeholder="Enter confirmPassword"
                    className='form-control'/>
                </div> 

                <div className='col-4'>
                    <input type="submit" name="submit" className='btn btn-success'/>
                </div>  
            </form>
            </div> 
        </div> 
    </div>
  )
}

export default AxiosPostFirebase;