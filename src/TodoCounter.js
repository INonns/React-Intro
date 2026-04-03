import './TodoCounter.css'

function TodoCounter({completed, total}) {
  return (
    <h1>
        Has completado {completed} de {total} TO-DO'S
    </h1>
  );
}

export { TodoCounter };