import './TodoItem.css'


function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <span>V {props.completed} </span> */}
      <input type="checkbox"></input>
      <p>{props.text}</p>
      {/* <span>X</span> */}
    </li>
  );
}

export { TodoItem }