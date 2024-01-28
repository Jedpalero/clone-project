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
import { useState, useEffect } from "react";
import CardSwipeCarousel from "../mobile/CardSwipeCarousel";
import CardRecentlyCarousel from "../mobile/CardRecentlyCarousel";

const Home = () => {
  const [sidebar] = useOutletContext();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 720);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="flex flex-col text-white mb-3">
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
              className={`top flex relative flex-wrap items-center bg-[#121212] bg-opacity-40 rounded-md ${
                sidebar ? "w-[460px]" : "md:w-[580px] w-[150px]"
              }`}
            >
              <button
                className={`icon hidden absolute  bg-[#1ed760] rounded-full p-3 drop-shadow-lg  ${
                  sidebar ? "ml-[400px]" : "ml-[520px]"
                }`}
              >
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </svg>
              </button>
              <img
                src={detail.url}
                alt="logo"
                className={`rounded-l-md ${
                  sidebar
                    ? "h-[60px] w-[60px]"
                    : "md:h-[85px] md:w-[85px] h-[55px] w-[55px]"
                }`}
              />
              <h1 className="font-bold md:ml-4 ml-2 md:text-[15px] text-[10px]">
                {detail.channelName}
              </h1>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-bold">Made For Red Lo</h1>
        {isMobile ? (
          <>
            <CardSwipeCarousel />
          </>
        ) : (
          <>
            <Card />
          </>
        )}
        <h1 className="text-2xl font-bold">Recently Played</h1>
        {isMobile ? (
          <>
            <CardRecentlyCarousel />
          </>
        ) : (
          <>
            <CardRecently />
          </>
        )}
      </div>
      <div className="flex w-full fixed bottom-0 left-0 md:hidden">
        <FooterMenu />
      </div>
    </div>
  );
};

export default Home;
