import React from 'react'
import '../styles/TodoCounter.css'

const TodoCounter = (props) => {
  return (
    <h2 className='TodoCounter'>
      Has completado {props.completed} de {props.tasksCount}
    </h2>
  )
}

export default TodoCounter