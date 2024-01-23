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
import FooterMenu from "../components/FooterMenu";

const Home = () => {
  const [sidebar] = useOutletContext();

  return (
    <div className="flex flex-col text-white ">
      <div
        className={`md:flex items-center justify-between mb-1 p-6 hidden ${
          sidebar ? "" : ""
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

      <div className="md:scrollbar md:overflow-y-scroll overflow-hidden md:h-[47rem] mb-[55px]">
        <h1 className="text-3xl font-bold md:block hidden">Good morning</h1>
        <div className="md:hidden flex justify-between items-center mt-7">
          <h1 className="text-2xl font-bold">Good morning</h1>
          <span className="space-x-3">
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>

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
      <div className="flex w-full fixed bottom-0 left-0 md:hidden">
        <FooterMenu />
      </div>
    </div>
  );
};

export default Home;
