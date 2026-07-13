import React from 'react'
import { useState } from 'react'
// import fetchData from '../componenets/card.jsx'

export const Input = ({width, onSubmit}) => {
//You need to write a state variables inside a hook not outside above this | also all thi functions too
const [data, setdata] = useState('')

const setinputdata = (e)=>{
    setdata(e.target.value)
    // console.log(e.target.value);
    
}
const loadData = ()=>{
    onSubmit(data)
}

  return (
    <div >
        <div style={{width:width}}  onChange={setinputdata} className='rounded-xl p-2 m-2 bg-gray-300 border-2'>
            < input type="text" placeholder='enter data' />
        </div>

        <div style={{width:width}} onClick={loadData} className='bg-gray-200 w-3xs rounded-xl h-10 p-2 m-2 flex justify-center cursor-pointer border-2 font-semibold'>Submit</div>
    </div>
    
  )
}

