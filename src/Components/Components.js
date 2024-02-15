import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Components = () => {
  return (
    <div className='container'>
        <h1>Components Types</h1>
        <nav>
            <NavLink to="classcomponents"><button className='btn btn-warning'>Class</button></NavLink>&nbsp;&nbsp;
            <NavLink to="functional"><button className='btn btn-info'>Functional</button></NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Components;