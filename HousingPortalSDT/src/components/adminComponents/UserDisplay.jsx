import GloButton from "../../components/GloButton";
import UserCard from "./UserCard";
import { useNavigate } from 'react-router-dom';
//() => {navigator('/userRegistration')}
const UserDisplay = () => {

    const navigator = useNavigate();
    return(
        <div className=" w-[90%] h-[90%] px-[20px] rounded-[25px] border-2 border-[#dfdfdf] flex flex-col  items-center ">
            <div className=" w-[100%] h-[18%] mb-[25px]">
                <div className="h-auto w-[100%] flex flex-row justify-end">
                    <GloButton name= "Register New User" onclick = {() => {navigator('/userRegistration')}}/>
                </div>
                <p className="font-semibold text-[30px] ml-[20px]"> Registered Users</p>
            </div>
            <div className=" w-[100%] h-[75%] rounded-[10px] border-2 border-[#dfdfdf] bg-[#ececec] flex flex-col">
                <div className="flex flex-row  border-b-2">
                    <div className="h-[50px] w-[25%] flex items-end pl-[10px] font-semibold">RegId</div>
                    <div className="h-[50px] w-[25%] flex items-end pl-[10px] font-semibold">Role</div>
                    <div className="h-[50px] w-[25%] flex items-end pl-[10px] font-semibold">Email</div>
                    <div className="h-[50px] w-[25%] flex items-end justify-center pl-[10px] font-semibold"></div>
                </div>
                <div className="overflow-scroll h-auto">
                    <UserCard id="0001" role="Student" email="yashas@students.nsbm.ac.lk"/>
                    <UserCard id="0002" role="Student" email="rusith@students.nsbm.ac.lk"/>
                    <UserCard id="0003" role="Student" email="sineth@students.nsbm.ac.lk"/>
                    <UserCard id="0004" role="Student" email="navishka@students.nsbm.ac.lk"/>
                    <UserCard id="0005" role="Student" email="dakum@students.nsbm.ac.lk"/>
                    <UserCard id="0006" role="Student" email="nemal@students.nsbm.ac.lk"/>
                    <UserCard id="0007" role="Warden" email="warden1@students.nsbm.ac.lk"/>
                    <UserCard id="0008" role="Warden" email="warden2@students.nsbm.ac.lk"/>
                    <UserCard id="0009" role="Landlord" email="landlord1@students.nsbm.ac.lk"/>
                    <UserCard id="0010" role="Landlord" email="landlord1@students.nsbm.ac.lk"/>
                </div>
            </div>
        </div>
    )
}
export default UserDisplay;