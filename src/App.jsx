import { useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{
      id: Date.now(), ...todo
    }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? (
      todo
    ) : (
      prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? (
      {
        ...prevTodo, completed: !prevTodo.completed
      }
    ) : (
      prevTodo
    )))
  }

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className='bg-slate-900 mx-8'>
        <div className='w-full max-w-2xl mx-auto h-screen my-10 p-10'>
          <h2 className='text-center font-bold text-[30px] text-white pt-5 uppercase mb-10'>Todos</h2>
          <div>
            <TodoForm />
          </div>
          <div>
            {
              todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
            <TodoItem/>
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App;
