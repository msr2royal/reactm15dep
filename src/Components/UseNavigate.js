import React from 'react'
import { useNavigate } from 'react-router-dom';

const UseNavigate = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>UseNavigate Component <br/>(UseHistory and Redirect are deprecated in React Router v6)</h1>
        <button className='btn btn-success' onClick={()=>navigate('/hooks')}>UseNavigate/Hooks</button>
    </div>
  )
}

export default UseNavigate;