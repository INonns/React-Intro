import React from "react";
import "./TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input 
    id="TodoSearch" 
    placeholder="Cortar cebolla..." 
    value = {searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }} />
  );
}

export { TodoSearch };