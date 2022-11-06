import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      {todo.category}
      <div>
  
        <button onClick={() => completeTodo(index)}>Done</button>
        {/* <input type="checkbox" onClick={() => removeTodo(index)> */}
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}



function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const[select, setSelect] = useState(true);
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(input + value); 
    // addCat(value);
    setValue("");
    setInput("");
    setSelect(true);
    // setValuee("");

  };

  function inputHandler(event) {
    setInput(event.target.value);
    setSelect(false);

  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="category" className="select" id="category" onChange={e => setValue(" -"+ e.target.value)}>
          {select ? <option  disabled selected value="Select">Select category</option>:<option value="Select">Select category</option>}
          <option value="Urgent">Urgent</option>
          <option value="Important">Important</option>
      </select>
      <input
        type="text"
        className="input"
        placeholder="Enter todo"
        value={input}
        onChange={inputHandler}
      />
    </form>
  );
}




function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Make todo application ",
      isCompleted: false,
      category: "- Important",
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, { text, category }];
    setTodos(newTodos);
  };


  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <h1>To-do App</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />


      </div>
    </div>
  );
}

export default App;