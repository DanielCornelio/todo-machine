import React, { useState } from 'react'
import '../styles/TodoSearch.css'

const TodoSearch = (props) => {
  const [searchValue, setSearchValue] = useState("")
  
const onSearchValueChange = (event)=>{
  setSearchValue(event.target.value)
}

const _handleKeyDown=  (e) => {
  if (e.key === 'Enter' && searchValue !== '') {
    props.addTodo(searchValue);
    setSearchValue('');
  }
}

  return (<>
    <input className="TodoSearch" 
      value={searchValue} 
      placeholder="Introduce aqui tu tarea..."
      onChange={onSearchValueChange}
      onKeyDown={_handleKeyDown}
    />
    </>
  )
}

export default TodoSearch