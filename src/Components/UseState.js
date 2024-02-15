import React, { useState } from 'react'

export const UseState = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h1>UseState Hook Component!</h1>
        <h3>You clicked {count} times!</h3>
        <button className='btn btn-success' onClick={()=>setCount(count+1)}>Change</button>
    </div>
  )
}

// export default UseState;