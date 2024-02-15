import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const PreForm = () => {
  return (
    <div className='container'>
        <h1>Pre-requisites for Form</h1>
        <nav>
            <NavLink to="onclick"><button className='btn btn-danger'>OnClick Component</button></NavLink>&nbsp;&nbsp;
            <NavLink to="onchange"><button className='btn btn-warning'>OnChange Component</button></NavLink>&nbsp;&nbsp;
            <NavLink to="onsubmit"><button className='btn btn-info'>OnSubmit Component</button></NavLink>

        </nav>
        <Outlet/>
    </div>
  )
}

export default PreForm;