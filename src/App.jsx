import { useEffect, useState } from 'react'
import './App.css'
import Todo from './Components/Todo'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  const handleDelete = (index) =>{
    setTodos(todos.filter((_,i)=> i!=index))
  }

  return (
    <>
     <Todo setTodos={setTodos} todos ={todos}/>
     <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  )
}

export default App
