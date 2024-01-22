import {
  faBell,
  faChevronCircleLeft,
  faChevronCircleRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch } from "react-icons/fa";
import ShortCard from "../components/ShortCard";
import { useOutletContext } from "react-router-dom";

const Search = () => {
  const [sidebar] = useOutletContext();

  return (
    <div className="flex flex-col text-white ">
      <div
        className={`flex items-center justify-between mb-1 p-6  ${
          sidebar ? "" : ""
        }`}
      >
        <div className="flex gap-2 text-3xl">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
          <FontAwesomeIcon icon={faChevronCircleRight} />
          <div className="flex items-center">
            <FaSearch className="text-lg ml-3 relative z-10 text-gray-500" />

            <input
              type="text"
              id="search"
              name="search"
              className="absolute border text-sm rounded-full   block p-2.5 w-[350px] px-10 dark:bg-[#121212] dark:border-gray-600"
              placeholder="what do you want to listen to?"
              autocomplete="off"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full py-2 px-4 text-sm font-bold bg-[#121212]">
            Install App
          </button>
          <div className=" rounded-full px-[6px] py-[1px] bg-[#121212]">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className=" rounded-full px-[6px] py-[1px] bg-[#121212]">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      <div className="scrollbar overflow-y-scroll h-[47rem]">
        <h1 className="text-2xl font-bold">Browse all</h1>
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
      </div>
    </div>
  );
};

export default Search;
