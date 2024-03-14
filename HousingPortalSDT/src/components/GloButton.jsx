
//A global Button for all purpose buttons
const GloButton = (props) => {
    return(
        <input type="button" value={props.name} className="m-[15px] py-[13px] px-[25px] bg-[#4541FD] text-white cursor-pointer rounded-[20px] hover:opacity-80 active:border  active:text-[#4541FD] active:bg-[#A7A5FE] hover:ease-in-out active:ease-in-out" onClick={onclick}/>
    )
};

export default GloButton;