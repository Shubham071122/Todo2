import React, { useState } from 'react'
import useTodo from '../contexts/TodoContext'

function TodoItem({ todo }) {

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const [isEditable, setIsEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo?.todo)

  const editTodo = () => {
    console.log("EditTodo called");
    updateTodo(todo?.id, { ...todo, todo: todoMsg })
    setIsEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  }

  return (
    <div className={`mt-5 py-2 px-3 justify-between rounded-md ${todo?.completed }? "bg-green-400" : "bg-slate-400"}`}>
      {/* <form className='w-full flex flex-row'> */}
      <div className='w-full flex flex-row'>

        <input type="checkbox"
          className='mr-2 cursor-pointer'
          checked={todo?.completed}
          onChange={toggleCompleted}
        />

        <input type="text"
          className={`bg-white py-1 px-2 w-full rounded-md border outline-none ${isEditable ? "border-black/10" : "border-transparent"} 
          ${todo?.completed ? "line-through" : ""}
          `}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isEditable}
          disabled={todo?.completed}
        />

        <button className={` ${todo?.completed ? "bg-green-300" :"bg-gray-300"} px-2 mx-2 rounded-md`}
          onClick={() => {
            if (todo?.completed) return;

            if (isEditable)
              editTodo();
            else
              setIsEditable((prev) => !prev);
          }}
          disabled={todo?.completed}
        >
          {
            isEditable ? ("📁") : ("✏️")
          }
        </button >
        <button className='bg-gray-300 px-2 rounded-md'
          onClick={() => deleteTodo(todo?.id)}>
          {"❌"}
        </button>
      </div>
      {/* </form> */}
    </div>
  )
}

export default TodoItem
