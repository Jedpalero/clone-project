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

const Search = () => {
  return (
    <div className="text-white bg-gray-600  pt-4 pl-7 pr-7 rounded-lg">
      {/* <div className="w-[94%] h-[5%] fixed bg-black"> */}
      <div className="flex justify-between items-center mb-8">
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
      {/* </div> */}
      {/* <div className="flex text-center gap-3 mb-5">
        <div className="bg-gray-800 border rounded-full py-1 px-3 block">
          Playlists
        </div>
        <div className="bg-gray-800 border rounded-full py-1 px-3 block">
          <h3>Artists</h3>
        </div>
        <div className="bg-gray-800 border rounded-full py-1 px-3 block">
          <h3>Albums</h3>
        </div>
        <div className="bg-gray-800 border rounded-full py-1 px-3">
          <h3>Podcast & Shows</h3>
        </div>
      </div> */}
      <label className="text-2xl font-bold">Browse all</label>
      <ShortCard />
    </div>
  );
};

export default Search;
