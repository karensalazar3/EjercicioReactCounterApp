import React, { useState } from 'react' 
import './Counter.css'


const Counter = (props) => {
    const [count,setCount] = useState(props.start)
   
    const updateCount = (e) => {
        if(e.target.innerHTML == "+"){
            setCount(count + props.step)
        }else{
            setCount(count - props.step)
        }
        
    }
  return (
    <>
    <button onClick={updateCount}>+</button>
    <span>{count}</span>
    <button onClick={updateCount}>-</button>
    </>
  )
}

export default Counter  