const UserCard = () => {
    return (
        <div className="flex w-full bg-[#E3E3E3] pt-[11px] pl-[11px] pb-[8px] pr-[66px] relative rounded-md border-[0.5px] border-[#C2C0C0]">
            <div>
                <img src="/img/Rectangle5.png" alt=""/>
            </div>
            <div className="grow text-left ml-2 " dir="ltr">
                <div className="flex justify-between mb-3 item-center">
                    <p className="text-xs text-[#747474]">Name:</p>
                    <p className="text-xs text-[#747474] font-bold">John</p>
                </div>
                <div className="flex justify-between mb-3 item-center">
                    <p className="text-xs text-[#747474]">Family Name:</p>
                    <p className="text-xs text-[#747474] font-bold">Gomez</p>
                </div>
                <div className="flex justify-between mb-3 item-center">
                    <p className="text-xs text-[#747474]">Birth date:</p>
                    <p className="text-xs text-[#747474] font-bold">1986/06/06</p>
                </div>
                <div className="flex justify-between mb-3 item-center">
                    <p className="text-xs text-[#747474]">ID No:</p>
                    <p className="text-xs text-[#747474] font-bold">8463830885</p>
                </div>
                <div>
                    <img src="/svg/image16.svg" alt=""/>
                </div>
            </div>
            <button className="absolute bottom-1.5 right-1.5 py-1 px-5 font-bold text-xs text-white bg-[#57EFDD] rounded-md">check</button>
            <div className="absolute right-[26px] top-1">
                <img src="/svg/edit.svg" alt=""/>
            </div>
            <input className="absolute top-1 right-1" type="checkbox" />
        </div>
    )
}

export default UserCard