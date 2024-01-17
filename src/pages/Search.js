import {
  faBell,
  faChevronCircleLeft,
  faChevronCircleRight,
  // faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch } from "react-icons/fa";
import ShortCard from "../components/ShortCard";
import { useOutletContext } from "react-router-dom";

const Search = () => {
  const [sidebar] = useOutletContext();

  return (
    <div className="text-white mt-[70px] ">
      <div
        className={`flex flex-wrap justify-between mb-8  bg-neutral-700  top-0 mt-2 p-6 fixed  z-[5] ${
          sidebar ? "w-[73%]" : "w-[93%]"
        }`}
      >
        <div className="flex gap-2 text-3xl">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
          <FontAwesomeIcon icon={faChevronCircleRight} />
          <div className="flex items-center">
            <FaSearch className="text-lg ml-3 relative z-10 text-black" />

            <input
              type="text"
              id="first_name"
              className="absolute bg-gray-50 border text-sm rounded-full   block p-2.5 w-[350px] px-10 dark:bg-gray-700 dark:border-gray-600"
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

      <label className="text-2xl font-bold">Browse all</label>
      <ShortCard />
    </div>
  );
};

export default Search;
