const UserCard = (props) => {
    const {id, role, email} = props;
    return(
        <div className="flex flex-row hover:bg-[#DADADA] ease-in-out duration-300">
            <div className="h-[50px] w-[25%] flex items-center pl-[10px] font-light">{id}</div>
            <div className="h-[50px] w-[25%] flex items-center pl-[10px] font-light">{role}</div>
            <div className="h-[50px] w-[25%] flex items-center pl-[10px] font-light">{email}</div>
            <div className="h-[50px] w-[25%] flex items-center justify-center pl-[10px]">
                <input type="button" value="Remove" className="w-[70px] h-[40px] bg-red-800 text-[13px] text-white rounded-[8px] cursor-pointer hover:opacity-[75%] active:bg-red-600 active:text-white ease-in-out duration-300"/>
            </div>
        </div>
    )
}

export default UserCard;