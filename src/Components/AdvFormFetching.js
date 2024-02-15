import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const AdvFormFetching = () => {
  return (
    <div className='container'>
        <h1>AdvFormFetching Component!</h1>
        <nav>
            <NavLink to="getaxios"><button className='btn btn-danger'>GetApiAxios</button></NavLink>&nbsp;&nbsp;
            <NavLink to="getfetch"><button className='btn btn-warning'>GetApiFetch</button></NavLink>&nbsp;&nbsp;
            <NavLink to="axpostfire"><button className='btn btn-info'>AxiosPostFirebase</button></NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default AdvFormFetching;