import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log('You clicked '+count+' times!');
    },[count]);
  return (
    <div>
          <h1>UseState & UseEffect Hooks Component!</h1>
        <h3>You clicked {count} times!</h3>
        <button className='btn btn-danger' onClick={()=>setCount(count+1)}>Change</button>
    </div>
  )
}

export default UseEffect;