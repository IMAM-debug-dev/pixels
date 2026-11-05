import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from "../redux/features/searchSlice.js"

const searchBar = () => {

  
  const[text , setText ] = useState('')
const dispatch = useDispatch()


 const SubmitHandle = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
}

  return (
    <div className='bg-[#3c6382] mb-5' >
      <form onSubmit={SubmitHandle}
      
       className='flex gap-2 p-10' >
        <input value={text}
         onChange={(e) => {
                     
                    setText(e.target.value)
                    }
          
        }
         required 
         className='w-full border-2 px-4 py-2 text-2xl rounded-2xl outline-none' type="text" placeholder='Search anything....' />
       <button className=' cursor-pointer border-2 px-4 py-2 text-2xl rounded-xl outline-none'> Search </button>
      </form>
    </div>
  )
}

export default searchBar
