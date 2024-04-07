import { useLogout } from "@/hooks/userLogout";

import { Link } from "react-router-dom";

function Header() {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <nav className="bg-[#252525] sticky w-full z-20 top-0 start-0  ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="src/assets/assets/Home.png"
            className="h-8"
            alt="hostel logo"
          />
          <span className="self-center text-2xl text-gray-400 font font-inter">
            HOSTEL
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            className="bg-black border border-white text-white px-3 py-1 rounded-[8px] font-poppins  transition-colors hover:border-[#6DFFB9] focus:outline-none md:hover:text-[#6DFFB9] focus:ring-1"
            onClick={handleClick}
          >
            Log out
          </button>

          <button
            // onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center ">
              
              <Link
                to="/dashboard"
                className=" py-2 px-3 rounded font-poppins text-white hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-[#6DFFB9] md:p-0 flex items-center"
              >
                <img
                src="src/assets/assets/filledhome.png"
                className="w-5 h-5 mr-1"
                alt="filledhouse"
              />
                Dashboard
              </Link>
            </li>
            <li className="flex items-center">
              
              <Link
                to="/viewAllProperties"
                className=" py-2 px-3 rounded font-poppins text-white hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-[#6DFFB9] md:p-0 flex items-center"
              >
                <img
                src="src/assets/assets/Bed.png"
                className="w-5 h-5 mr-1"
                alt="filledhouse"
              />
                Hostels
              </Link>
            </li>
            <li className="flex items-center">
              
              <Link
                to="/Art"
                className=" py-2 px-3 rounded font-poppins text-white hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-[#6DFFB9] md:p-0 flex"
              >
                <img
                src="src/assets/assets/Page.png"
                className="w-5 h-5 mr-1 hover:filter-[#6DFFB9]"
                alt="filledhouse"
              />
                Articles
              </Link>
            </li>
          </ul>
          <div>
            {/* <button
                onClick={handleClick}
                >Log out</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
