// import TagSection from "./TagSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import ShortsCard from "./ShortsCard";
import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const LandingSection = ({ sidebar }) => {
  const [show, setShow] = useState(false);

  return (
    // w-screen top-1/2 left-1/2
    <div className={`text-white ${sidebar ? "" : ""}`}>
      <Card sidebar={sidebar} />
      <Card sidebar={sidebar} />
      <div className={` m-5 ${sidebar ? "" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <g>
            <path
              d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
              fill="red"
            ></path>
            <polygon
              points="10 14.65 15 12 10 9.35 10 14.65"
              fill="#fff"
            ></polygon>
          </g>
        </svg>
        <h3 className="text-xl font-semibold">Shorts</h3>
      </div>
      {/* <div className="md:overflow-x-hidden "> */}
      {/* <div className="absolute top-[100%] "> */}
      {/* <ShortsCard sidebar={sidebar} show={show} />
          <div
            onClick={() => setShow(!show)}
            className="relative border w-[500px] p-2 cursor-pointer text-center rounded-full 4xl:ml-[700px] md:ml-[500px] flex items-center justify-center gap-2 m-4"
          > */}

      <div className="p-2 text-center rounded-full">
        <ShortsCard sidebar={sidebar} show={show} />
        <div
          onClick={() => setShow(!show)}
          className="border w-[200px] rounded-full m-auto cursor-pointer z-100"
        >
          {show ? (
            <>
              <h3>show less</h3>
              <FontAwesomeIcon icon={faChevronUp} />
            </>
          ) : (
            <>
              <h3>show more</h3>
              <FontAwesomeIcon icon={faChevronDown} />
            </>
          )}
        </div>
      </div>
      {/* <hr className="w-[99%] absolute bottom-[20px] overflow-hidden z-0" /> */}
    </div>
  );
};

export default LandingSection;
