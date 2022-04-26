
import React, { useState } from 'react';
import './counter.css'
export const Counter = () =>{
  
    const [count, setCount] = useState('1')

    const decrement = () =>{
       setCount(count-1)
    }
    const increment = () =>{
        setCount(count+1)
    }

    return(
        <div className='counterdiv'>
         <button onClick={decrement} className='btn1'>
           -
         </button>

         <h2 className='count2'>
            {count}
         </h2>

         <button onClick={increment} className='btn2'>
             +
         </button>
        </div>
    )
}

