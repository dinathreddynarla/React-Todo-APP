import React from 'react'

const TodoList = ({todos , handleDelete}) => {
  return (
    <div id='todoList'>
      <ul id="todo-items">
                {todos.map((todo, index) => (
                    <li key={index}>{todo} <button onClick={() =>handleDelete(index)}>Delete</button></li>
                ))}
            </ul>
    </div>
  )
}

export default TodoList
