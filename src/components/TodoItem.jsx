import React from "react";
import '../styles/TodoItem.css'

const TodoItem = (props) => {

  const onComplete =  ()=>{
    props.completeTodo(props.todo);
  }
  const onDelete =  ()=>{
    alert('borraste el todo ' + props.todo.text)
  }

  return (
    <li className="TodoItem" >
    <span className={`Icon Icon-check ${props.todo.completed && 'Icon-check--active'}`}
    onClick = {onComplete}
    >
      √
    </span>
    <p className={`TodoItem-p ${props.todo.completed && 'TodoItem-p--complete'}`}
    onClick = {onComplete}
    >
      {props.todo.text}
    </p>
    <span className="Icon Icon-delete"
      onClick = {onDelete}
    >
      X
    </span>
  </li>
  );
};

export default TodoItem;
