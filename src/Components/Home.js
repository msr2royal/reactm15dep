import React from 'react'
import '../App.css';

const Home = () => {
  const styles={color:"yellow",backgroundColor:"grey",textAlign:"center",borderRadius:'50%'};
  return (
    <div className='container'>
        <h1 style={{color:"white",backgroundColor:"dodgerblue",textAlign:"center",borderRadius:'25%'}}>Inline Styles!</h1>
        <h1 style={styles}>Internal Styles!</h1>
        <h2 className='extstyles'>External Styles!</h2>

    </div>
  )
}

export default Home;