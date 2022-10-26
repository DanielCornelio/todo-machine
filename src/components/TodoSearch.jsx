import React, { useState } from 'react'
import '../styles/TodoSearch.css'

const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState("")
  
const onSearchValueChange = (event)=>{
  setSearchValue(event.target.value)
}

  return (<>
    <input className="TodoSearch" 
      value={searchValue} 
      placeholder="Cebolla"
      onChange={onSearchValueChange}
    />
    <p>{searchValue}</p>
    </>
  )
}

export default TodoSearch