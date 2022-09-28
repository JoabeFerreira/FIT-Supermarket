import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UserOptions.css'

function UserOptions() {
    return (  
        <div className="user-options">
            <p>Joabe</p>
            <div><FontAwesomeIcon icon={faCircleUser} size='lg'/></div>
        </div>
    )
}

export default UserOptions;