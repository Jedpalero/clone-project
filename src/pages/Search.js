import {
  faBell,
  faChevronCircleLeft,
  faChevronCircleRight,
  // faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="text-white bg-gray-600  pt-4 pl-7 pr-7 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 text-3xl">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
          <FontAwesomeIcon icon={faChevronCircleRight} />
          <div className="flex items-center">
            <FaSearch className="text-lg ml-10 relative z-10 text-black" />
            <input
              className="bg-gray-700 placeholder:text-sm ml-3 rounded-full absolute placeholder:pl-14 placeholder:flex placeholder:h-10 placeholder:pt-5"
              type="text"
              placeholder="what do you want to listen to?"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full py-2 px-4 text-sm font-bold bg-black">
            Install App
          </button>
          <div className=" rounded-full px-[6px] py-[1px] bg-black">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className=" rounded-full px-[6px] py-[1px] bg-black">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      <label className="font-bold ml-4">Browse All</label>
    </div>
  );
};

export default Search;
