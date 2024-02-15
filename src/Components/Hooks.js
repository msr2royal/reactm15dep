import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

const Hooks = () => {
  return (
    <div className='container'>
       <h1>Hooks Component!</h1>
       <nav>
            <NavLink to='usestate'><button className='btn btn-info'>UseState</button></NavLink> &nbsp;&nbsp;
            <NavLink to='useeffect'><button className='btn btn-danger'>UseEffect</button></NavLink> &nbsp;&nbsp;
            <NavLink to='usenavigate'><button className='btn btn-secondary'>UseNavigate</button></NavLink> &nbsp;&nbsp;
            <NavLink to='useparams'><button className='btn btn-primary'>UseParams</button></NavLink> &nbsp;&nbsp;
            <NavLink to='usecontext'><button className='btn btn-success'>UseContext</button></NavLink> 
        </nav> 
        <Outlet/>
    </div>
  )
}

export default Hooks