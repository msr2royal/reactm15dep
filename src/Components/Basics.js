import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Basics = () => {
  return (
    <div className='container'>
        <h1>Basics to react - Usemap/UseFilter</h1>
        <nav>
            <NavLink to='usemap'><button className='btn btn-warning'>UseMap</button></NavLink> &nbsp;&nbsp;
            <NavLink to='usefilter'><button className='btn btn-danger'>UseFilter</button></NavLink> 
        </nav> 
        <Outlet/>
    </div>
  )
}

export default Basics;