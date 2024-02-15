import React from 'react'
import Audio1 from '../assets/audios/aum.mp3';

const Audio = () => {
  return (
    <div>
        <h1>Images Component</h1>
        <audio controls autoplay>
          <source src={Audio1} type="audio/mp3"/>
       </audio>
    </div>
  )
}

export default Audio;