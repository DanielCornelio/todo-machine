import React,{useState} from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

import "./App.css";

function App() {

  const [todos, setTodos] = useState([
    { text: "Cortar cebolla", completed: true },
    { text: "Tormar el curso de intro a react", completed: false },
    { text: "Llorar con la llorona", completed: false },
  ]);

  const addTodo = (todo)=>{
    console.log("agregando tarea")
    setTodos(todos.concat({
      text:todo, 
      completed: false,
    }))
  }
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch addTodo={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
