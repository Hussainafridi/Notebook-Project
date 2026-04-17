import React from 'react'
import { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const App = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,note})
    setTask(copyTask)
  
    
    
    setTitle('')
    setNote('')

  }

  const Delete =(idx)=>{
  
  const copyTask = [...task]

  
  copyTask.splice(idx,1)
  setTask(copyTask)
  

  
  

  }
  return (
    <div className=' h-screen lg:flex text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex items-start lg:w-1/2 p-10 flex-col gap-5'>
        <h1 className='font-bold text-3xl text-center text-black'>Add Notes</h1>


        <input
          className='px-5 w-full text-red-600 py-2 outline-none rounded border-2'
          type="text" placeholder='Enter task'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)

          }}

        />
        <textarea
          value={note}
          onChange={(e) => {
            setNote(e.target.value)
          }}

          name="" id="" className='px-5 py-2 outline-none text-red-600 w-full h-20 rounded border-2' placeholder='Enter Details '>
        </textarea>
        <button className='bg-green-500 cursor-pointer w-full  text-black px-5 py-3 rounded '>Add Notes</button>
      </form>
      <div className=" p-10 lg:w-1/2 border-l-2 ">
        <h1 className='font-bold text-3xl text-center text-black'>Your Notes</h1>
        <div className='flex flex-wrap h-full mt-8 gap-5 overflow-auto'>
        {
            task.map(function(e,idx) {
            return <div key={idx} className=" mt-2 px-12 py-10 h-72 w-50 relative  bg-cover rounded-2xl bg-[url('https://imgs.search.brave.com/4KxIFXvSAQpvg_zHDZMzHecltyfsCAeHyyYoWLGSRgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/NzcyLzU0OS9zbWFs/bC93YXRlcmNvbG9y/LXNwaXJhbC1ub3Rl/cGFkLWZyZWUtcG5n/LnBuZw')]">
          <h2
          onClick={()=>{
          Delete(idx)
          }}
          
          className='text-black px-10 py-3 absolute top-9 right-0 font-bold text-2xl cursor-pointer'><RiDeleteBin6Line /></h2>
              <h3 className='text-black  mt-5 font-bold text-2xl wrap-break-word mb-1'>{e.title}</h3>
               <p className='text-black wrap-break-word text-xl'>{e.note}
               </p>
            </div>
            
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App