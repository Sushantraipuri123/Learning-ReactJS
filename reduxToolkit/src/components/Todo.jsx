import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {removeTodo} from '../feature/todo/todoSlice'
function Todo() {
 const todos =  useSelector(state => state.todos)
 const dispatch = useDispatch()
  return (
    <>
      <h1
      className=' capitalize h-7 mt-8'
      > my Todos</h1>
      {todos.map((todo)=>(
        <li
        className=' rounded bg-slate-300 p-6  outline-slate-600 max-w-3xl mt-5 ms-52'
         key={todo.id}>
          {todo.text}

          <button
          onClick={()=>dispatch(removeTodo(todo.id))} 
          className=' ms-7  bg-red-600 font-bold px-3 py-1 rounded-3xl text-white duration-700 hover:rounded-none hover:scale-95'
          >
            Del
          </button>

        </li>
      ))}
    </>
  )
}

export default Todo
