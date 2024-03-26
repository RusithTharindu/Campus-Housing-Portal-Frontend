
const Login = () => {
    return (
        <div className="h-screen w-screen bg-[#000000] flex justify-center items-center">
            <div className="border-[#ffffff] border w-[500px] h-[600px] rounded-[20px] flex flex-col items-center justify-center bg-black">
                <div className=" flex flex-col items-center">
                    <img src="src\assets\assets/home" className="h-[80px] mb-[15px]" />
                    <p className="text-[25px] font-semibold text-white mb-[5px]">Log In to your account</p>
                    <p className="text-[rgba(255,255,255,0.3)] text-[15px] font-[300]">Welcome back ! Please enter your details.</p>
                </div>
                <form action="">
                    <div className="w-[400px] mt-[20px]">
                        <p className="text-white font-semibold text-[15px] mb-[5px]">Email</p>
                        <input type="email" name="Email" className="bg-[#20242D] w-[100%] h-[40px] rounded-[10px] p-[15px] text-[#fff] tracking-wider text-[15px] mb-[15px]" placeholder="example@gmail.com"/>
                        <p className="text-white font-semibold text-[15px] mb-[5px] mt-[10px]">Password</p>
                        <input type="password" name="passsword" className="bg-[#20242D] w-[100%] h-[40px] rounded-[10px] p-[15px] text-[#fff] tracking-wider text-[15px]"/>
                        <div className="w-[400px] mt-[20px] mb-[20px] flex flex-row items-center">
                            <input type="checkbox" name="check" className="h-[18px] w-[18px] border-[2px] border-[#20242D] appearance-none rounded-[5px] checked:bg-blue-500 checked:border-0" />
                            <p className="text-white ml-[10px] text-[15px] ">Remember for 30 Days</p>
                        </div>
                        <input type="submit" value="Sign In" className="w-[100%] h-[40px] bg-[#00868D] text-white font-[600] rounded-[20px] hover:bg-[#069BA2] cursor-pointer transition ease delay-50  active:bg-[#222222] active:border active:border-white"/>
                    </div>
                </form>

                {/*Divider*/}
                <div className="w-[400px] h-[1px] bg-[rgba(255,255,255,0.3)] mt-[25px]"></div>

                <p className="text-[#93A0B9] mt-[15px] font-regular">Don't have an account? <a href="#" className="font-semibold text-[#6367e2] hover:underline decoration-solid-[#fff] ">Sign up</a></p>
            </div>
        </div>
    ) 
}

export default Login;