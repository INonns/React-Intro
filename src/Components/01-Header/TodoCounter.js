import './TodoCounter.css'

function TodoCounter({completed, total}) {
  return (
    <span id="TodoCounter">
        {total} Tasks - {completed} Completed
    </span>
  );
}

export { TodoCounter };