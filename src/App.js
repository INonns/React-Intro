import React from 'react';
import './App.css'

import { TodoCounter } from './Components/01-Header/TodoCounter';
import { TodoSearch } from './Components/02-Body/TodoSearch';
import { TodoList } from './Components/02-Body/TodoList';
import { TodoItem } from './Components/02-Body/TodoItem';
import { CreateTodoButton } from './Components/03-Footer/CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Llorar viendo la llorona', completed: true},
  { text: 'LALALALL', completed: true},
  { text: 'Terminar curso de ReactJS', completed: true},
  { text: 'LELELEL', completed: true},
  { text: 'Ver una peli', completed: true},
  { text: 'Terminar una serie', completed: true},
  { text: 'Escribir', completed: true},
  { text: 'Dibujar', completed: true},
  { text: 'Terminar página web', completed: true},
  { text: 'Escuchar música', completed: true},
  { text: 'Escribir un poema', completed: true},
]

function App() {
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
            <span className="header-icon"> 👨‍💻 </span>

            <div className="header-text-group">
              <TodoCounter total={5} completed={3}/>
              <h1 className="header-cat-title"> Personal </h1>
            </div>

        </div>

      </div>



      <div className="body-section">
        {/* Seccion principal, donde iran las tareas*/}
          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
              />
            ))}
          </TodoList>
      </div>



      <div className="footer-section">
        {/* Seccion final donde ira el boton para agregar */}

        <CreateTodoButton/>
      </div>





      {/* <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

       */}
    </div>
  );
}

export default App;
