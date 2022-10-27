import {useParams} from "react-router-dom";
import UserForm from "./UserForm";

const AddUser = () => {


    return (
        <UserForm save="addUser" />
    )
}

export default AddUser