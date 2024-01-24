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
import FooterMenu from "../components/FooterMenu";

const Search = () => {
  const [sidebar] = useOutletContext();

  return (
    <div className="flex flex-col text-white ">
      <div
        className={`md:flex items-center justify-between mb-1 p-6 hidden  ${
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
              autoComplete="off"
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

      <div className="md:scrollbar md:overflow-y-scroll md:h-[47rem] mb-[75px]">
        <h1 className="text-2xl font-bold md:block hidden">Browse all</h1>
        <h1 className="text-2xl font-bold md:hidden block mb-5 mt-7">Search</h1>
        <div className="flex md:hidden">
          <FaSearch className="text-lg ml-3 mt-2 relative z-10 text-gray-500" />
          <input
            type="text"
            id="search1"
            name="search1"
            className="absolute text-sm block p-2 w-[330px] px-10 dark:bg-[#302b2be3] dark:border-gray-600"
            placeholder="what do you want to listen to?"
            autoComplete="off"
          ></input>
        </div>
        <div className="md:hidden flex justify-between items-center mt-7">
          <h1 className="text-md font-bold mb-2 md:mb-0">Browse all</h1>
        </div>
        <ShortCard />
        <ShortCard />
        {/* <ShortCard /> */}
      </div>
      <div className="flex w-full fixed bottom-0 left-0 md:hidden">
        <FooterMenu />
      </div>
    </div>
  );
};

export default Search;
