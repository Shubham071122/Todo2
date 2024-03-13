import React, { useState } from 'react'
import useTodo from '../contexts/TodoContext'

function TodoForm() {

  const { addTodo } = useTodo();

  const [todo, setTodo] = useState("");
  console.log(todo);

  const add = (e) => {
    e.preventDefault()
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  }


  return (
    <form onSubmit={add} className='mx-auto flex'>
      <input type="text"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-white"
        placeholder='Write Todo...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}

      />
      <button type='submit' className='text-white bg-green-500  py-3 px-5 rounded-r-md outline-none'>Add</button>
    </form>
  )
}

export default TodoForm