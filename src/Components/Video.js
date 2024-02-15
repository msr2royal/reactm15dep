import React from 'react'
import Vedio1 from '../assets/videos/aum.mp4';

const Vedio = () => {
  return (
    <div>
        <h1>Images Component</h1>
        <video controls autoPlay>
          <source src={Vedio1} type="video/mp4"/>
       </video>
    </div>
  )
}

export default Vedio;