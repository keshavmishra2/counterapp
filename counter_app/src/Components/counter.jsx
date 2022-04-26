
import React, { useState } from 'react';
import './counter.css'
export const Counter = () =>{
  
    const [counter, setCounter] = useState(1)
   const maxValue = 800;
    const decrement = () =>{
    
       setCounter(counter - 1)
    }
    const increment = () =>{
    
        setCounter((prevcount)=>{
            if(prevcount < maxValue){
                return (prevcount += 1)
            }else{
                return (prevcount === maxValue)
            }
        })
    }
      
    const setvalue = (e) =>{
        setCounter(e.target.value)
    }
    
    return(
        <>
         <input onChange={setvalue}  type="Number" placeholder='Enter the start number' ></input>
         {/* <input onChange={setMaxvalue}  type="number" placeholder='Max Vlule' ></input> */}
        
        <div className='counterdiv'>

         <button onClick={decrement} className='btn1'>
           -
         </button>

         <h3 className='count2'>
            {counter}
         </h3>

         <button onClick={increment} className='btn2'>
             +
         </button>
        </div>
        
        </>
    )
}

