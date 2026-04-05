import './TodoItem.css'


function TodoItem(props) {
  return (
    <li className="TodoItem">

      <label className="custom-checkbox">
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </label>


      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}</p>
    </li>
  );
}

export { TodoItem }