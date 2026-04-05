import './TodoItem.css'


function TodoItem(props) {
  return (
    <li className="TodoItem">

      <label className="custom-checkbox">
        <input 
        type="checkbox"
        onClick={props.onComplete}
        />
        <span className="checkmark"></span>
      </label>


      <span className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}</span>

      <span 
        onClick={props.onDelete}
        className="TodoItem-delete"
      >X</span>
    </li>
  );
}

export { TodoItem }