const UserRegistration = () => {
    return(
        <div className="h-[80vh] w-[100%] flex justify-center items-center">
            <div className="w-[800px] h-[400px] border-2 border-[#dfdfdf] rounded-[25px]">
                <form action="">
                    <div className="w-[100%] h-[100%] px-10 flex flex-col items-center">
                        <div className=" h-auto w-[100%] flex justify-between items-center mt-[25px] mb-[30px]">
                            <p className="mt-[15px] font-semibold text-[30px]">User Registration Form</p>
                            <select name="properties" className="h-[50px] w-[150px] bg-[#fff] text-[15px] font-regular border-2 pl-[10px] rounded-[10px]">
                                <option value="Student">Student</option>
                                <option value="Warden">Warden</option>
                                <option value="Landlord">Landlord</option>
                            </select>
                        </div>

                        <div className="w-[100%] h-[100%]">
                            <p className="font-light text-[18px] mb-[10px]">User Email</p>
                            <input type="email" name="" id="" placeholder="Email" className="bg-[#E1E1E1] mb-[20px] h-[40px] w-[100%] rounded-[5px] pl-[10px]" required/>
                            <p className="font-light text-[18px] mb-[10px]">Password</p>
                            <input type="password" name="" id="" placeholder="Password" className="bg-[#E1E1E1] mb-[20px] h-[40px] w-[100%] rounded-[5px] pl-[10px]" required/>
                        </div>
                        <input type="button" value="Submit" className="h-[50px] bg-[#24CC2B] w-[100px] rounded-[10px] cursor-pointer text-[#2D2D2D] hover:opacity-60 active:bg-[#2D2D2D] active:text-[#24CC2B] duration-300"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserRegistration;