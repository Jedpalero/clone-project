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

const Home = () => {
  const [sidebar] = useOutletContext();

  return (
    <div className="text-white mt-[70px]">
      <div
        className={`flex flex-wrap  items-center justify-between mb-8 bg-neutral-700 w-[94%] top-0 mt-2 p-6 fixed z-[5] ${
          sidebar ? "w-[72%]" : "w-[93%]"
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
      <label className="text-3xl font-bold">Good morning</label>
      <div className="mt-3 flex flex-wrap gap-2.5 mb-8">
        <div className="flex flex-wrap items-center w-[450px] bg-gray-700 rounded-md">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb5b4f7224dc981dfa3561288c"
            alt="logo"
            className="h-[60px] w-[60px] rounded-md"
          />
          <label className="font-bold ml-4">Decibel Worship</label>
        </div>
        <div className="flex flex-wrap items-center w-[450px] bg-gray-700 rounded-md">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb5b4f7224dc981dfa3561288c"
            alt="logo"
            className="h-[60px] w-[60px] rounded-md"
          />
          <label className="font-bold ml-4">Decibel Worship</label>
        </div>
        <div className="flex flex-wrap items-center w-[450px] bg-gray-700 rounded-md">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb5b4f7224dc981dfa3561288c"
            alt="logo"
            className="h-[60px] w-[60px] rounded-md"
          />
          <label className="font-bold ml-4">Decibel Worship</label>
        </div>
        <div className="flex flex-wrap items-center w-[450px] bg-gray-700 rounded-md">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb5b4f7224dc981dfa3561288c"
            alt="logo"
            className="h-[60px] w-[60px] rounded-md"
          />
          <label className="font-bold ml-4">Decibel Worship</label>
        </div>
        <div className="flex flex-wrap items-center w-[450px] bg-gray-700 rounded-md">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb5b4f7224dc981dfa3561288c"
            alt="logo"
            className="h-[60px] w-[60px] rounded-md"
          />
          <label className="font-bold ml-4">Decibel Worship</label>
        </div>
      </div>
      <label className="text-2xl font-bold">Made For Red Lo</label>
      <Card />
      <label className="text-2xl font-bold">Recently Played</label>
      <Card />
      <label className="text-2xl font-bold">Recently Played</label>
      <Card />
    </div>
  );
};

export default Home;
