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

// import { useEffect, useReducer, useState } from 'react'
// import './App.css'
// import Todo from './Components/Todo'
// import TodoList from './Components/TodoList'


// const reducer = (state,action)=>{
//   switch(action.type) {
//     case "ADD_TODO" :
//       return [...state,action.payload] ;
//     case "DELETE_TODO" :
//       return state.filter((_,i)=> i !== action.payload) ;
//     case "SET_TODO":
//       return action.payload;
//     default:
//       throw new Error('Unknown action type');
//   }
// }


// function App() {
//   const [todos, dispatch] = useReducer(reducer,[]);

//   useEffect(() => {
//     const storedTodos = localStorage.getItem("todos");
//     if (storedTodos) {
//       dispatch({type:"SET_TODO" , payload :JSON.parse(storedTodos)})
//     }
//   }, []);


//   useEffect(()=>{
//     localStorage.setItem("todos",JSON.stringify(todos))
//   },[todos])


//   const handleDelete = (index) =>{
//     dispatch({type:"DELETE_TODO" , payload:index})
//   }

//   return (
//     <>
//      <Todo dispatch={dispatch}/>
//      <TodoList todos={todos} handleDelete={handleDelete} />
//     </>
//   )
// }

// export default App
