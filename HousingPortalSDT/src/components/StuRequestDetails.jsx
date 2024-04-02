import AcceptBtn from "./AcceptBtn";
import RejectBtn from "./RejectBtn";

const StuRequestDetails = () =>{
    return(
        <div className="border-[#dfdfdf] w-[100%] h-[60px] flex flex-row hover:bg-[#DADADA] ease-in-out duration-300">
            <div className="h-[100%] w-[40%] flex items-center pl-[20px]">
                <p className="text-[15px]">yeshashewage@gmail.com</p>
            </div>
            <div className="h-[100%] w-[20%] flex items-center justify-center">
                <p className="text-[15px]">Samanala Resort</p>
            </div>
            <div className="h-[100%] w-[10%] flex items-center justify-center">
                <p className="text-[13px]">Pending</p>
            </div>
            <div className="h-[100%] w-[30%] flex flex-row items-center justify-evenly px-[10px]">
                <AcceptBtn/>
                <RejectBtn/>
            </div>
        </div>
    )
}

export default StuRequestDetails;