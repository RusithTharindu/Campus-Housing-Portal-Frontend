"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import { useState } from "react";
// import { useLogin } from "@/hooks/useLogin";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/src/assets/Group 3.png"
              className="h-8"
              alt="hostel logo"
            />
          </a>
          <div className="flex md:order-2 space-x- md:space-x-0 rtl:space-x-reverse">
            <Select>
              <SelectTrigger className="w-[180px] h-[40px">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="propertyOwner">propertyOwner </SelectItem>
                  <SelectItem value="student">student</SelectItem>
                  <SelectItem value="warden">warden</SelectItem>
                  <SelectItem value="admin">admin</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center min-h-screen flex-col bg-white">
        <div className="mx-auto grid w-[380px] gap-8 bg-white shadow-2xl rounded-lg p-6">
          <div className="grid gap-4 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-4">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button
                  type="button"
                  className="absolute right-1 top-0 mt-3 mr-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full p-4 bg-gray-50 text-center">
        <Link href="/privacy-policy" className="underline text-sm">
          Privacy Policy
        </Link>
        <span className="mx-2">|</span>
        <Link href="/terms-of-service" className="underline text-sm">
          Terms of Service
        </Link>
        <span className="mx-2">|</span>
        <Link href="/contact-us" className="underline text-sm">
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default Login;

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("propertyOwner");
//   const { login, isLoading } = useLogin();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await login(email, password, role);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="h-screen w-screen bg-[#000000] flex justify-center items-center">
//       <div className="border-[#ffffff] border w-[500px] h-[600px]  rounded-[20px] flex flex-col items-center justify-center bg-black">
//         <div className="flex flex-col items-center ">
//           <img src="src/assets/logo1.png" className="h-[80px] mb-[15px]" />
//           <p className="text-[25px] font-semibold text-white mb-[5px]">
//             Log In to your account
//           </p>
//           <p className="text-[rgba(255,255,255,0.3)] text-[15px] font-[300]">
//             Welcome back ! Please enter your details.
//           </p>
//         </div>
//         <form action="" onSubmit={handleSubmit}>
//           <div className="w-[400px] mt-[20px]">
//             <p className="text-white font-semibold text-[15px] mb-[5px] mt-[10px]">
//               Role
//             </p>
//             <select
//               onChange={(e) => {
//                 setRole(e.target.value);
//                 console.log(e.target.value);
//               }}
//               className="bg-[#20242D] w-[40%] h-[40px] rounded-[10px] p-[10px]  text-[#fff] tracking-wider text-[15px] mb-[15px]"
//             >
//               <option value="propertyOwner">PropertyOwner</option>
//               <option value="student">Student</option>
//               <option value="warden">Warden</option>
//               <option value="admin">Admin</option>
//             </select>

//             <p className="text-white font-semibold text-[15px] mb-[5px]">
//               Email
//             </p>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               name="Email"
//               className="bg-[#20242D] w-[100%] h-[40px] rounded-[10px] p-[15px] text-[#fff] tracking-wider text-[15px] mb-[15px]"
//               placeholder="example@gmail.com"
//             />
//             <p className="text-white font-semibold text-[15px] mb-[5px] mt-[10px]">
//               Password
//             </p>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               name="passsword"
//               className="bg-[#20242D] w-[100%] h-[40px] rounded-[10px] p-[15px] text-[#fff] tracking-wider text-[15px]"
//             />
//             <div className="w-[400px] mt-[20px] mb-[20px] flex flex-row items-center">
//               <input
//                 type="checkbox"
//                 name="check"
//                 className="h-[18px] w-[18px] border-[2px] border-[#20242D] appearance-none rounded-[5px] checked:bg-blue-500 checked:border-0"
//               />
//               <p className="text-white ml-[10px] text-[15px] ">
//                 Remember for 30 Days
//               </p>
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-[100%] h-[40px] bg-[#00868D] text-white font-[600] rounded-[20px] hover:bg-[#069BA2] cursor-pointer transition ease delay-50  active:bg-[#222222] active:border active:border-white"
//             >
//               Login
//             </button>
//             {/* {error && <div className="">{error}</div>} */}
//           </div>
//         </form>
//         <p className="text-[#93A0B9]  font-regular">
//           Don't have an account?{" "}
//           <a
//             href="/register"
//             className="font-semibold text-[#6367e2] hover:underline decoration-solid-[#fff] "
//           >
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
//
// };
// export default Login;
