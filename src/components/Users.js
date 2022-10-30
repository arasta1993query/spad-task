import UserCard from "./UserCard";
import Search from "./Search";
import {useSelector} from "react-redux";

const Users = () => {

    const {users} = useSelector(state => state.users)
    return (
        <>
            <Search />
            <div className="mb-3" dir="rtl">
                <input type="checkbox"/>
            </div>
            <div>
                {
                    users.map(user => {
                        return(
                            <UserCard user={user} key={user.id.title} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Users