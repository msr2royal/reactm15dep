import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ExportComponents = () => {
  return (
    <div className='container'>
        <h1>Export/Import Components methis</h1>
        <nav>
            <NavLink to='export'><button className='btn btn-info'>Export</button></NavLink> &nbsp;&nbsp;
            <NavLink to='exportdef'><button className='btn btn-danger'>Export Def</button></NavLink>  
        </nav> 
        <Outlet/>

    </div>
  )
}

export default ExportComponents