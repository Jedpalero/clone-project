import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMicrophone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = ({ sidebar, setSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <nav className="flex justify-between px-7 py-3 bg-[#18181b] text-white z-1">
        <div className="flex items-center gap-3 cursor-pointer">
          <FontAwesomeIcon icon={faBars} onClick={() => setSidebar(!sidebar)} />
          <span className="flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faYoutube} className="text-[#ff0000]" />
            <h3 className="font-semibold">YouTube</h3>
          </span>
        </div>
        <div className="flex items-center">
          <input
            placeholder="Search"
            type="text"
            className="bg-transparent border-2 border-gray-600 rounded-l-full px-3 lg:pr-[290px] pr-[50px]  py-0.5 w-full"
          />
          <div className="bg-gray-700 h-full px-5 py-1 rounded-r-full cursor-pointer pl-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="ml-4 bg-gray-700 px-2.5 py-1 rounded-full cursor-pointer">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <svg
            className="h-5 cursor-pointer"
            fill="#ffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_iconCarrier">
              <path d="M18 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.333L22 17V7l-4 3.333V7zm-4 6h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
            </g>
          </svg>
          <FontAwesomeIcon icon={faBell} className="cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default HeaderSection;
