import React from "react";
import "./TodoSearch.css"

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <input 
    id="TodoSearch" 
    placeholder="Cortar cebolla..." 
    value = {searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
      console.log("Los usuarios buscan tareas de: " + searchValue)
    }} />
  );
}

export { TodoSearch };