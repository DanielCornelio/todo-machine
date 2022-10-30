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
    setTodos(todos.concat({
      text:todo, 
      completed: false,
    }))
  }

  const completeTodo = (todo)=>{
    const index = todos.findIndex((item)=> item === todo);
    const elements = [...todos];
    elements[index] = {...todo, completed:!todo.completed};
    setTodos(elements);
  }

  const deleteTodo= (todo)=>{
    setTodos(todos.filter(item => item !== todo));
  }

  return (
    <React.Fragment>
      <TodoCounter 
      completed={todos.filter(item => item.completed).length} 
      tasksCount={todos.length}
      />
      <TodoSearch addTodo={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
