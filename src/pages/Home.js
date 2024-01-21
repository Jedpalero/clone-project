import {
  faBell,
  faChevronCircleLeft,
  faChevronCircleRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../components/Card";
import { useOutletContext } from "react-router-dom";
import details from "../data/homeCardDetails";
import CardRecently from "../components/CardRecently";

const Home = () => {
  const [sidebar] = useOutletContext();

  return (
    <div className="text-white mt-[70px]">
      <div
        className={`flex  items-center justify-between mb-8  w-[94%] top-0 mt-2 p-6 fixed z-[5] ${
          sidebar ? "w-[74%]" : "w-[92%]"
        }`}
      >
        <div className="flex gap-2 text-3xl">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full py-2 px-4 text-sm text-black font-bold bg-white">
            Explore Premium
          </button>
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
      <h1 className="text-3xl font-bold">Good morning</h1>
      <div className="mt-3 flex flex-wrap gap-2.5 mb-8">
        {details.map((detail) => (
          <div
            key={detail.channelName}
            className={`flex flex-wrap items-center bg-[#121212] bg-opacity-40 rounded-md ${
              sidebar ? "w-[460px]" : "w-[580px]"
            }`}
          >
            <img
              src={detail.url}
              alt="logo"
              className={`rounded-l-md ${
                sidebar ? "h-[60px] w-[60px]" : "h-[85px] w-[85px]"
              }`}
            />
            <h1 className="font-bold ml-4">{detail.channelName}</h1>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold">Made For Red Lo</h1>
      <Card />
      <h1 className="text-2xl font-bold">Recently Played</h1>
      <CardRecently />
    </div>
  );
};

export default Home;
