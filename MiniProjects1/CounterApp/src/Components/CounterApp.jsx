import React, { useState } from 'react'

const CounterApp = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h3 className='text-4xl text-center mb-6 font-bold m-2  text-shadow-md'>Count is: {count}</h3>
        <div className="buttons text-center mt-10">
        <button className='text-md font-medium border-transparent px-2 py-1 rounded-sm text-center bg-green-700 hover:bg-green-800  mx-1 cursor-pointer' onClick={()=>count<100?setCount(count+1):""}>Increase</button>
        <button className='text-md font-medium border-transparent px-2 py-1  rounded-sm text-center bg-red-700 hover:bg-red-800  mx-1 cursor-pointer' onClick={()=>count>0?setCount(count-1):""}>Decrease</button>
        <button className='text-md font-medium border-transparent px-2 py-1  rounded-sm text-center bg-yellow-400 hover:bg-yellow-500  mx-1 cursor-pointer' onClick={()=>setCount(0)}>Reset</button>
        </div>
        <p className='mt-2 text-sm text-center italic text-stone-800 font-medium'>Counter limit is 0 to 100</p>
    </div>
  )
}
export default CounterApp