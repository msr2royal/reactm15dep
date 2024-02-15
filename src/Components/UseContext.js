import React from 'react'
import { UserContext } from '../App';
const UseContext = () => {
  return (
    <div className='container'>
        <UserContext.Consumer>
            {(value)=><div>{value}</div>}

        </UserContext.Consumer>
    </div>
  )
}

export default UseContext;