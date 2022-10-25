const AddUser = () => {
    return (
        <>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3">Name:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3">Family Name:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3">Mobile:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3">ID No:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3">Birth date:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" type="text"/>
            </label>
            <label className="flex justify-between item-center mb-3">
                <div className="basis-1/3">Address:</div>
                <input className="basis-2/3 w-full border border-[#CECECE] rounded-md h-[28px]" type="text"/>
            </label>
            <label className="flex item-start mt-11">
                <div className="basis-1/3">Profile Pic:</div>
                <input className="hidden" type="file"/>
                <div className="w-[100px] h-[130px] relative  bg-white border border-[#6EEBE7] rounded-md h-[28px] shadow-[0_2px_4px_rgba(0,0,0,0.25)] after:content-[''] after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:absolute after:bg-[#6EEBE736] after:rounded-full after:w-[44px] after:h-[44px]">
                    <img src="/svg/Camera2.svg" alt="" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"/>
                </div>
            </label>
            <div className="flex justify-end gap-2 mt-16">
                <button className="py-1 px-6 text-white rounded-md bg-[#FF5050] font-bold">back</button>
                <button className="py-1 px-6 text-white rounded-md bg-[#57EFDD] font-bold">save</button>
            </div>
        </>
    )
}

export default AddUser