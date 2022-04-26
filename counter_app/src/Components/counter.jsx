
import React, { useState } from 'react';
import './counter.css'
export const Counter = () =>{
  
    const [count, setCount] = useState(1)

    const decrement = () =>{
       setCount(count - 1)
    }
    const increment = () =>{
        setCount(count + 1)
    }
      
    const setvalue = (e) =>{
        setCount(e.target.value)
    }
    return(
        <>
         {/* <input className='myinpt' onChange={setvalue}  type="number" placeholder='Enter the start number ' ></input> */}

        <div className='counterdiv'>



         <button onClick={decrement} className='btn1'>
           -
         </button>

         <input className='count2' onChange={setvalue} value="input" type="number">
            {count}
         </input>

         <button onClick={increment} className='btn2'>
             +
         </button>
        </div>
        </>
    )
}

