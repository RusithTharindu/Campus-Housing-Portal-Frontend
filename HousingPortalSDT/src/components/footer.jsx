import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white" style={{ width: "100%" }}>
      <div className="mx-auto flex flex-wrap px-20 py-[60px] justify-between">
        <div className="w-full md:w-1/2 px-4">
          <a href="">
            <div className="flex flex-row items-center gap-[15px] mb-8">
              <div>
                <img
                  src="src\assets\nsbm_logo.png"
                  alt="Description of the image"
                  className=" w-[32px] h-[35px]"
                />
              </div>
              <div>
                <h1 className="text-[30px] font-light">HOSTEL</h1>
              </div>
            </div>
          </a>

          <div className="text-gray-400 text-sm font-light">
            <p className="mb-2 hover:text-blue-500">1234567890</p>
            <p className="mb-2 hover:text-blue-500">email@example.com</p>
            <Link
              className="mb-2 hover:text-blue-500"
              to="https://www.nsbm.ac.lk/"
            >
              NSBM
            </Link>
          </div>

        </div>

        <div className="flex flex-row gap-[120px] lg:mr-10">
          <div className="flex flex-col">
            <ul className="text-white text-[14px] font-extralight">
              <li className="mb-4 hover:text-blue-500">
                <Link to="">Dashboard</Link>
              </li>
              <li className="mb-4 hover:text-blue-500">
                <Link to="">Hostels</Link>
              </li>

            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="text-white text-[14px]  font-extralight">
              <li className="mb-4 hover:text-blue-500">
                <Link to="">Articles</Link>
              </li>
              <li className="mb-4 hover:text-blue-500">
                <Link to=""></Link>
              </li>
              <li className="mb-4 hover:text-blue-500">
                <Link to=""></Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="text-white text-[14px] font-extralight">
              <li className="mb-4 hover:text-blue-500">
                <Link to="">About Us</Link>
              </li>
              <li className="mb-4 hover:text-blue-500">
                <Link to="">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
