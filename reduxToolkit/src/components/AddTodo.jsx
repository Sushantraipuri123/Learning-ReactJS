import React from 'react'
import {useDispatch } from 'react-redux'
import {addTodo} from '../feature/todo/todoSlice'
 
function AddTodo() {
  const [input, setInput] = React.useState('')

  const dispatch = useDispatch()

  const addTodoHandler = (e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput()
  }
  return (
    <>
      <form action="" onSubmit={addTodoHandler} className=' space-x-3 mt-12'>
        <input
         type="text"
         className='bg-gray-800  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2  focus:ring-indigo-900 text-base text-gray-100 outline-none py-1 px-3 leading-8 transition-colors  duration-200 ease-in-out '
        placeholder='Add Todo...'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
         />
         <button
         type="submit"
         className=" text-white border-0 py-2 bg-indigo-500 px-6  focus:outline-none hover:bg-indigo-600 rounded text-lg"
         >
            Add Todo
         </button>

      </form>
    </>
  )
}

export default AddTodo
