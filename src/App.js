import React from 'react';
import './App.css'

import { TodoCounter } from './Components/01-Header/TodoCounter';
import { TodoSearch } from './Components/02-Body/TodoSearch';
import { TodoList } from './Components/02-Body/TodoList';
import { TodoItem } from './Components/02-Body/TodoItem';
import { CreateTodoButton } from './Components/03-Footer/CreateTodoButton';

import { GraduatedIcon } from './Components/Icons/Icons-lib/GraduatedIcon';

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
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = React.useState(parsedTodos); // Contar Todos
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

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

  console.log("Los usuarios buscan todos de " + searchValue)

  return (
    <div className="app-wrapper">


      <div className="header-section">
        {/* Seccion donde ira la cabecera */}

        <div className="header-nav">
          <button className="nav-btn">←</button>
          <button className="nav-btn">⋮</button>
        </div>

        <svg className="header-circle" viewBox="0 0 500 200" preserveAspectRatio="none">
          <path d="M0,0 L500,0 L500,100 Q250,200 0,100 Z" fill="#fae06e" />
        </svg>

        <div className="header-content">
            <GraduatedIcon /> 
            <div className="header-text-group">
              <TodoCounter 
                total={totalTodos} 
                completed={completedTodos}
              />
              <h1 className="header-cat-title"> Personal </h1>
            </div>

        </div>

      </div>


      <div className="body-section">
        {/* Seccion principal, donde iran las tareas*/}
          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
      </div>


      <div className="footer-section">
        {/* Seccion final donde ira el boton para agregar */}

        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>

        <CreateTodoButton/>
      </div>

    </div>
  );
}

export default App;
