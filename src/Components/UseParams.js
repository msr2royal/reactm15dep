import React from 'react'
import { useParams } from 'react-router-dom';
import Images from '../assets/images/paramsV.PNG';
import pathparams from '../assets/images/pathparams.PNG';
import queryparams from '../assets/images/queryparams.PNG';


const UseParams = () => {
    const params = useParams();
  return (
    <div>
        <h1>Fetching UseParams : {params.name}</h1>
        <img src={Images} width="600px" height="400px" alt="not available"/><br/><br/>

        <p>In Pathparams param name must be know</p>
        <img src={pathparams} width="600px" height="400px" alt="not available"/><br/><br/>

        <p>In Query Params param name not required to know</p>
        <img src={queryparams} width="600px" height="400px" alt="not available"/><br/><br/>
    </div>
  )
}

export default UseParams;