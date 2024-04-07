import StuRequestDetails from "./StuRequestDetails";

const RequestDisplay = () => {
    return(
        <div className=" w-[95%] h-[90%] border border-[#dfdfdf] rounded-xl px-5 py-10 bg-[#F6F6F6]">
            <p className="text-[15px]">Student Requests</p>
            <div className="flex flex-row justify-between items-centers">
                <select name="properties" className="h-[50px] w-[300px] bg-[#F6F6F6] text-[25px] font-semibold border-0">
                    <option value="Samanala Resort">Samanala Resort</option>
                    <option value="Ran Samanala Resort">Ran Samanala Resort</option>
                    <option value="Sudu Samanala Resort">Sudu Samanala Resort</option>
                    <option value="Godak Sudu Samanala Resort">Godak Sudu Samanala Resort</option>
                </select>
                <input type="text" name="searchbox" placeholder="Search Properties..." className="h-[50px] w-[300px] bg-[#F6F6F6] text-[15px] font-medium border border-[#797979] rounded-full p-5"/>
            </div>
            <div className="bg-[#ececec] w-[100%] h-[80%] my-7 overflow-y-auto flex flex-col items-center rounded-xl">
                <div className=" border-[#dfdfdf] border-b-2 w-[100%] h-[60px] flex flex-row">
                    <div className="h-[100%] w-[40%] flex items-end pb-[5px] pl-[20px]">
                        <p className="text-[15px] font-semibold">Email</p>
                    </div>
                    <div className="h-[100%] w-[20%] flex items-end pb-[5px] pl-[45px]">
                        <p className="text-[15px] font-semibold">Property Name</p>
                    </div>
                    <div className="h-[100%] w-[10%] flex items-end pb-[5px] pl-[20px]">
                        <p className="text-[15px] font-semibold">Status</p>
                    </div>
                    <div className="h-[100%] w-[30%] "></div>
                </div>
                <div className="bg-[#ececec] w-[100%] h-[100%] overflow-scroll flex flex-col items-center rounded-xl">
                    <StuRequestDetails/>
                    <StuRequestDetails/>
                    <StuRequestDetails/>
                    <StuRequestDetails/>
                    <StuRequestDetails/>
                    <StuRequestDetails/>
                    <StuRequestDetails/>
                </div>
                
            </div>
        </div>
    );
}

export default RequestDisplay;