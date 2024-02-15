import React, { useState }  from 'react'
import '../App.css';

const Calculator = () => {
 const [input,setInput] = useState('');
 const [result,setResult] = useState(0);
 const changeHandler=(e)=>{
    setInput(e.target.value);
 }
  return (
    <div>
       <center>
        <h3>Calculator</h3>
        <div className='form-group col-3'>
            <input type="text" value={input} onChange={changeHandler} className="form-control"/>
            <button onClick={()=>setResult(eval(input))} className='btn btn-primary'>Result</button>
            <h4>Result : {result}</h4>
        </div>
        <div>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'1')}>1</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'2')}>2</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'3')}>3</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'4')}>4</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'5')}>5</button>
        </div>

        <div>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'6')}>6</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'7')}>7</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'8')}>8</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'9')}>9</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'0')}>0</button>
        </div>

        <div>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'+')}>+</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'-')}>-</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'*')}>*</button>
            <button className='btn btn-secondary button' onClick={()=>setInput(input+'/')}>/</button>
            <button className='btn btn-secondary button' onClick={()=>setInput('')}>Clr</button>
        </div> 
       </center>
    </div>
  )
}

export default Calculator;