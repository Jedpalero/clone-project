import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import ShortsCard from "./ShortsCard";
import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ShortCardCarousel from "../mobile/ShortCardCarousel";

const LandingSection = ({ sidebar, isMobile }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={` text-white md:mb-0 mb-[3rem] ${sidebar ? "" : ""}`}>
      <div className="ml-4 mr-4">
        <Card sidebar={sidebar} />
      </div>
      {/* <Card sidebar={sidebar} /> */}
      <div className={`flex items-center gap-2 p-2 ${sidebar ? "" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <svg>
            <path
              d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
              fill="red"
            ></path>
            <polygon
              points="10 14.65 15 12 10 9.35 10 14.65"
              fill="#fff"
            ></polygon>
          </svg>
        </svg>
        <h3 className="text-xl font-semibold">Shorts</h3>
      </div>

      <div className="p-2 overflow-hidden">
        {isMobile ? (
          <>
            <ShortCardCarousel />
          </>
        ) : (
          <>
            <ShortsCard sidebar={sidebar} show={show} />
          </>
        )}
        <div
          onClick={() => setShow(!show)}
          className="md:flex items-center gap-2 place-content-center p-2 border w-[200px] rounded-full cursor-pointer m-auto mt-4 mb-4 hidden"
        >
          {show ? (
            <>
              <h3 className="text-xs font-semibold">Show less</h3>
              <FontAwesomeIcon icon={faChevronUp} size="xs" />
            </>
          ) : (
            <>
              <h3 className="text-xs font-semibold">Show more</h3>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
