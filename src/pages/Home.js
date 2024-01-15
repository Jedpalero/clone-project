import {
  faBell,
  faChevronCircleLeft,
  faChevronCircleRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div className="text-white bg-gray-600  pt-4 pl-7 pr-7 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 text-3xl">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full py-2 px-4 text-sm text-black font-bold bg-white">
            Explore Premium
          </button>
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
      <label className="text-3xl font-bold">Good afternoon</label>
    </div>
  );
};

export default Home;
