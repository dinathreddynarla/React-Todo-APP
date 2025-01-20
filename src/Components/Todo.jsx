import React, { useState } from 'react';

const Todo = ({setTodos , todos}) => {
    const [inputValue, setInputValue] = useState("");
    

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div id="todo-container">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInput} placeholder="Enter Todo item" required/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default Todo;

// import React, { useState } from 'react';

// const Todo = ({dispatch}) => {
//     const [inputValue, setInputValue] = useState("");
    

//     const handleInput = (e) => {
//         setInputValue(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (inputValue.trim()) {
//             dispatch({type:"ADD_TODO" , payload : inputValue})
//             setInputValue("");
//         }
//     };

//     return (
//         <div id="todo-container">
//             <h1>Todo List</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={inputValue} onChange={handleInput} placeholder="Enter Todo item" required/>
//                 <button type="submit">Add Todo</button>
//             </form>
//         </div>
//     );
// };

// export default Todo;
