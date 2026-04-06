import React from 'react';
import './App.css';

import { useLocalStorage } from './useLocalStorage';

import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Llorar viendo la llorona', completed: false},
//   { text: 'LALALALL', completed: false},
//   { text: 'Terminar curso de ReactJS y todas sus variantes consigo mismo', completed: false},
//   { text: 'Usar estados derivados', completed: false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {

  const { // Lo que devuelve el custom hook
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [] ); // Parametros del custom hook

  const [searchValue, setSearchValue] = React.useState(''); // Buscar Todos

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos) // Actualizar array de todos
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1); // Splice, donde cortar y cuantos cortar
    saveTodos(newTodos) 
  }

  return (
    <AppUI
      loading={loading}
      error={error} 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={ deleteTodo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
}

export default App;
