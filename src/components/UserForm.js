import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const UserForm = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [user, setUser] = useState(() => {

        if (props.user) {
            return props.user
        }
        return {

            id: {
                title: '',
                checked: false
            },
            name: {
                title: "",
                checked: false
            },
            family_name: {
                title: "",
                checked: false
            },
            mobile: {
                title: "",
                checked: false
            },
            birth_date: {
                title: "",
                checked: false
            },
            address: {
                title: "",
                checked: false
            },
            img_url: {
                title: "",
                checked: false
            }

        }
    })
    console.log(user)

    const inputhandler = ( event ,index) => {
        const tempUser = JSON.parse(JSON.stringify(user))
        tempUser[index].title = event.target.value
        setUser(tempUser)
    }

    const save = () => {
        dispatch({type: props.save, payload: user})
        navigate('/')
    }

    const back = () => {
        navigate(-1)
    }

    return (
        <div className="mt-5">
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Name:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" onInput={(event) => {inputhandler(event, "name")}} value={user.name.title} type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Family Name:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" onInput={(event) => {inputhandler(event, "family_name")}} value={user.family_name.title} type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Mobile:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" onInput={(event) => {inputhandler(event, "mobile")}} value={user.mobile.title} type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3 text-[#747474] self-center text-xs">ID No:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" onInput={(event) => {inputhandler(event, "id")}} value={user.id.title} type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Birth date:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" onInput={(event) => {inputhandler(event, "birth_date")}} value={user.birth_date.title} type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Address:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" onInput={(event) => {inputhandler(event, "address")}} value={user.address.title} type="text"/>
            </label>
            <label className="flex item-start mt-11">
                <div className="basis-1/3 text-[#747474] text-xs">Profile Pic:</div>
                {
                    user.img_url.title ?
                    <div className="w-[100px] h-[130px] relative shadow-[0_2px_4px_rgba(0,0,0,0.25)] overflow-hidden rounded-md">
                        <img src={user.img_url.title} alt="" className="absolute top-0 left-0 w-full h-full"/>
                    </div>:
                    <>
                        <input className="hidden" type="file"/>
                        <div
                            className="w-[100px] h-[130px] relative  bg-white border border-[#6EEBE7] rounded-md h-[28px] shadow-[0_2px_4px_rgba(0,0,0,0.25)] after:content-[''] after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:absolute after:bg-[#6EEBE736] after:rounded-full after:w-[44px] after:h-[44px]">
                            <img src="/svg/Camera2.svg" alt=""
                                 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"/>
                        </div>
                    </>
                }
            </label>
            <div className="flex justify-end gap-2 mt-16">
                <button className="py-1 px-6 text-white rounded-md bg-[#FF5050] font-bold" onClick={back}>back</button>
                <button className="py-1 px-6 text-white rounded-md bg-[#57EFDD] font-bold" onClick={save}>save</button>
            </div>
        </div>
    )
}

export default UserForm