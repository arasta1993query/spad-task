import UserForm from "./UserForm";
import { useParams} from "react-router-dom";
import { useSelector} from "react-redux";

const EditUser = () => {

    const {id} = useParams()

    const currentUser = useSelector(state => state.users.users.find(user => {

        return +id === user.id.title
    }))




    return (
        <UserForm user={currentUser} save="editUser" />
    )
}

export default EditUser