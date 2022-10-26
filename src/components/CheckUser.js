const CheckUser = () => {
    return (
        <>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Name:</div>
                <p className="basis-2/3 text-xs w-full">Natalia</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt=""/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt=""/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Family Name:</div>
                <p className="basis-2/3 text-xs w-full">Gomez</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt=""/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt=""/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Mobile:</div>
                <p className="basis-2/3 text-xs w-full">4980011112</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt=""/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt=""/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">ID No:</div>
                <p className="basis-2/3 text-xs w-full">4980011112</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt=""/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt=""/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Birth date:</div>
                <p className="basis-2/3 text-xs w-full">1986/06/06</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt=""/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt=""/>
                    </span>
                </div>
            </div>
            <div className="flex justify-between item-center mb-3 relative">
                <div className="basis-1/3 text-[#747474] self-center text-xs">Address:</div>
                <p className="basis-2/3 text-xs w-full">No. 58 Goldensmith St,London,U.K</p>
                <div className="absolute flex right-1 bottom-0 translate-x-5 gap-1">
                    <span>
                        <img src="/svg/image8.svg" alt=""/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt=""/>
                    </span>
                </div>
            </div>
            <div className="flex item-start mt-11 ">
                <div className="basis-1/3 text-[#747474] text-xs">Profile Pic:</div>
                {/*<div className="w-[100px] h-[130px] relative  bg-white border border-[#6EEBE7] shadow-[0_2px_4px_rgba(0,0,0,0.25)] after:content-[''] after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:absolute after:bg-[#6EEBE736] after:rounded-full after:w-[44px] after:h-[44px]">*/}
                {/*    <img src="/svg/Camera2.svg" alt="" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"/>*/}
                {/*</div>*/}
                <div className="w-[100px] h-[130px] relative shadow-[0_2px_4px_rgba(0,0,0,0.25)] overflow-hidden rounded-md">
                    <img src="/img/Rectangle6.png" alt="" className="absolute top-0 left-0 w-full h-full"/>
                </div>
                <div className=" flex right-1 bottom-0 gap-1 self-end ml-2">
                    <span>
                        <img src="/svg/image8.svg" alt=""/>
                    </span>
                    <span>
                        <img src="/svg/image7.svg" alt=""/>
                    </span>
                </div>
            </div>
            <div className="flex justify-end gap-2 mt-16">
                <button className="py-1 px-6 text-white rounded-md bg-[#FF5050] font-bold">back</button>
                <button className="py-1 px-6 text-white rounded-md bg-[#57EFDD] font-bold">save</button>
            </div>
        </>
    )
}

export default CheckUser