import React from "react";
import { TodoIcon } from '../TodoIcon';

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon 
            type="delete"
            className="TodoItem-delete"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon };