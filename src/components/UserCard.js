import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const UserCard = (props) => {
    const checkedStatus = () => {
        let temp = true
        for(let key in props.user){
            if(!props.user[key].checked){
                temp = false
                break
            }
        }
        return temp

    }
    const [checked , setChecked] = useState(
        checkedStatus()
    )
    useEffect(() => {
        setChecked(checkedStatus())
    },[props.user])


    return (
        <div className="flex w-full bg-[#E3E3E3] pt-[11px] pl-[11px] pb-[8px] pr-[66px] relative rounded-md border-[0.5px] border-[#C2C0C0] mb-4">
            <div>
                <img src={props.user.img_url.title} alt=""/>
            </div>
            <div className="grow text-left ml-2 " dir="ltr">
                <div className="flex justify-between mb-3 item-center">
                    <p className="text-xs text-[#747474]">Name:</p>
                    <p className="text-xs text-[#747474] font-bold">{props.user.name.title}</p>
                </div>
                <div className="flex justify-between mb-3 item-center">
                    <p className="text-xs text-[#747474]">Family Name:</p>
                    <p className="text-xs text-[#747474] font-bold">{props.user.family_name.title}</p>
                </div>
                <div className="flex justify-between mb-3 item-center">
                    <p className="text-xs text-[#747474]">Birth date:</p>
                    <p className="text-xs text-[#747474] font-bold">{props.user.birth_date.title}</p>
                </div>
                <div className="flex justify-between mb-3 item-center">
                    <p className="text-xs text-[#747474]">ID No:</p>
                    <p className="text-xs text-[#747474] font-bold">{props.user.id.title}</p>
                </div>
                <div>
                    {
                        checked ?
                            <img src="/svg/image15.svg" alt=""/>:
                            <img src="/svg/image16.svg" alt=""/>

                    }
                </div>
            </div>
            <Link to={`/check/${props.user.id.title}`} className="absolute bottom-1.5 right-1.5 py-1 px-5 font-bold text-xs text-white bg-[#57EFDD] rounded-md">check</Link>
            <div className="absolute right-[26px] top-1">
                <img src="/svg/edit.svg" alt=""/>
            </div>
            <input className="absolute top-1 right-1" type="checkbox" />
        </div>
    )
}

export default UserCard