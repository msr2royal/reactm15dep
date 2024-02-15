import React from 'react' 
import Image1 from '../assets/images/abc.jpg';

const Download = () => {
  return (
    <div>
        <h1>Download Component</h1> 
        <img src={Image1} width="300px" height="200px" alt="not available"/><br/><br/>
        <a href={Image1} download><button className='btn btn-primary'>Download Image</button></a>

    </div>
  )
}

export default Download