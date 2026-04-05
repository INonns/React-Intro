import './TodoItem.css';
import { DeleteIcon } from '../Icons/Icons-lib/DeleteIcon';


function TodoItem(props) {
  return (
    <li className="TodoItem">

      <label className="custom-checkbox">
        <input 
        type="checkbox"
        onChange={props.onComplete}
        checked={props.completed}
        />
        <span className="checkmark"></span>
      </label>


      <span className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>{props.text}</span>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem }