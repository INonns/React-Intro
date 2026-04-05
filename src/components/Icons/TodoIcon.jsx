import { ReactComponent as GraduatedSVG } from './Icons-svg/graduated.svg';
import { ReactComponent as DeleteSVG } from './Icons-svg/delete.svg'

const iconTypes = {
    "graduated": <GraduatedSVG className="header-TodoIcon-svg"/>,
    "delete": <DeleteSVG className="delete-TodoIcon-svg"/>
};

function TodoIcon({type, className, onClick}) {
    return (
        <span 
            className={`${className} icon-svg icon-${type}`}
            onClick = {onClick}
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };
