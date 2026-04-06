import { TodoCounter } from '../components/01-Header/TodoCounter/index';
import { TodoSearch } from '../components/02-Body/TodoSearch/index';
import { TodoList } from '../components/02-Body/TodoList/index';
import { TodoItem } from '../components/02-Body/TodoItem/index';
import { CreateTodoButton } from '../components/03-Footer/CreateTodoButton/index';

import { TodosLoading } from '../components/InitialScreen/TodosLoading';
import { TodosError } from '../components/InitialScreen/TodosError';
import { EmptyTodos } from '../components/InitialScreen/EmptyTodos';

import { GraduatedIcon } from '../components/Icons/Icons-lib/GraduatedIcon';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    searchValue,
    setSearchValue
}) {
    return(
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
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

            {!loading && (
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
            )}
        </div>
    
    
        <div className="footer-section">
            {/* Seccion final donde ira el boton para agregar */}
    
            <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}/>
    
            <CreateTodoButton/>
        </div>
    
        </div>
    )
}

export { AppUI }