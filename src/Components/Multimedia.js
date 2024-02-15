import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Multimedia = () => {
  return (
    <div className='container'>
        <h1>Multimedia Import!</h1>
        <nav>
            <NavLink to='images'><button className='btn btn-info'>Images</button></NavLink> &nbsp;&nbsp;
            <NavLink to='audio'><button className='btn btn-danger'>Audio</button></NavLink> &nbsp;&nbsp;
            <NavLink to='video'><button className='btn btn-secondary'>Video</button></NavLink>   &nbsp;&nbsp;
            <NavLink to='downloads'><button className='btn btn-primary'>Download</button></NavLink>  
        </nav> 
        <Outlet/>
    </div>
  )
}

export default Multimedia;