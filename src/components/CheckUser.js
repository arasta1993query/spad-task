import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import _ from 'lodash'

const CheckUser = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentUser = useSelector(state => state.users.users.find(user => {
        return +id === user.id.title
    }))
   const [user, setUser] = useState(currentUser)

    const check = (prop) => {
        const tempUser = JSON.parse(JSON.stringify(user))
        tempUser[prop].checked = true
        setUser(tempUser)
    }
    const unCheck = (prop) => {
        const tempUser = JSON.parse(JSON.stringify(user))
        tempUser[prop].checked = false
        setUser(tempUser)
    }

    const save = () => {
        dispatch({type: 'editUser', payload: user})
        navigate('/')
    }

    const back = () => {
        navigate(-1)
    }


    console.log(user)
    return (
        <div className="mt-5">
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Name:</div>
                <p className="basis-2/3 text-xs w-full">{user.name.title}</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt="" onClick={() => unCheck('name')}/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt="" onClick={() => check('name')}/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Family Name:</div>
                <p className="basis-2/3 text-xs w-full">{user.family_name.title}</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt="" onClick={() => unCheck('family_name')}/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt="" onClick={() => check('family_name')}/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Mobile:</div>
                <p className="basis-2/3 text-xs w-full">{user.mobile.title}</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt="" onClick={() => unCheck('mobile')}/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt="" onClick={() => check('mobile')}/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">ID No:</div>
                <p className="basis-2/3 text-xs w-full">{user.id.title}</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt="" onClick={() => unCheck('id')}/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt="" onClick={() => check('id')}/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Birth date:</div>
                <p className="basis-2/3 text-xs w-full">{user.birth_date.title}</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt="" onClick={() => unCheck('birth_date')}/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt="" onClick={() => check('birth_date')}/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Address:</div>
                <p className="basis-2/3 text-xs w-full">{user.address.title}</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt="" onClick={() => unCheck('address')}/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt="" onClick={() => check('address')}/>
                    </span>
                </div>
            </div>
            <div className="flex item-start mt-11 ">
                <div className="basis-1/3 text-[#747474] text-xs">Profile Pic:</div>
                {/*<div className="w-[100px] h-[130px] relative  bg-white border border-[#6EEBE7] shadow-[0_2px_4px_rgba(0,0,0,0.25)] after:content-[''] after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:absolute after:bg-[#6EEBE736] after:rounded-full after:w-[44px] after:h-[44px]">*/}
                {/*    <img src="/svg/Camera2.svg" alt="" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"/>*/}
                {/*</div>*/}
                <div className="w-[100px] h-[130px] relative shadow-[0_2px_4px_rgba(0,0,0,0.25)] overflow-hidden rounded-md">
                    <img src={user.img_url.title} alt="" className="absolute top-0 left-0 w-full h-full"/>
                </div>
                <div className=" flex right-1 bottom-0 gap-1 self-end ml-2">
                    <span>
                        <img src="/svg/image8.svg" alt="" onClick={() => unCheck('img_url')}/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt="" onClick={() => check('img_url')}/>
                    </span>
                </div>
            </div>
            <div className="flex justify-end gap-2 mt-16">
                <button className="py-1 px-6 text-white rounded-md bg-[#FF5050] font-bold" onClick={back}>back</button>
                <button className="py-1 px-6 text-white rounded-md bg-[#57EFDD] font-bold" onClick={save}>save</button>
            </div>
        </div>
    )
}

export default CheckUser