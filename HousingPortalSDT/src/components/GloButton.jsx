
//A global Button for all purpose buttons
const GloButton = (props) => {
    return(
        <input type="button" onClick={props.onclick} value={props.name}  className="m-[15px] py-[13px] px-[25px] bg-[#4541FD] text-white cursor-pointer rounded-[20px] hover:opacity-80   active:text-[#4541FD] active:bg-[#A7A5FE] ease-in-out" />
    )
};

export default GloButton;