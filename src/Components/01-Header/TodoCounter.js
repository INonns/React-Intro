import './TodoCounter.css'

function TodoCounter({total, completed}) {

  let message;

  if (total === 0) {
    message = "Start creating your tasks"
  } else if (total === completed) {
    message = "Congrats, You've completed at all"
  } else {
    message = `${total} Tasks - ${completed} Completed`
  }

  return (
    <span id="TodoCounter">
      {message}
    </span>
  );
}

export { TodoCounter };