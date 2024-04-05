import { useLogout } from "@/hooks/userLogout";

import { Link } from "react-router-dom";

function Header() {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="src/assets/assets/Home.png"
            className="h-8"
            alt="hostel logo"
          />
          <span className="self-center text-2xl font text-gray-400 font-inter">
            HOSTEL
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            className="bg-white border font-[500] text-black px-3 py-1 rounded-[8px] font-poppins hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-700 dark:text-gray-400"
            onClick={handleClick}
          >
            Log out
          </button>

          <button
            // onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center ">
              <img
                src="src/assets/assets/filledhome.png"
                className="h-5 w-5 mr-1"
                alt="filledhouse"
              />
              <Link
                to="/dashboard"
                className="block py-2 px-3 rounded font-poppins text-white hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-[#6DFFB9] md:p-0"
              >
                dashboard
              </Link>
            </li>
            <li className="flex items-center">
              <img
                src="src/assets/assets/Bed.png"
                className="h-5 w-5 mr-1"
                alt="filledhouse"
              />
              <Link
                to="/hostels"
                className="block py-2 px-3 rounded font-poppins text-white hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-[#6DFFB9] md:p-0"
              >
                Hostels
              </Link>
            </li>
            <li className="flex items-center">
              <img
                src="src/assets/assets/Page.png"
                className="h-5 w-5 mr-1"
                alt="filledhouse"
              />
              <Link
                to="/articles"
                className="block py-2 px-3 rounded font-poppins text-white hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-[#6DFFB9] md:p-0"
              >
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
