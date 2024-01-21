import {
  faArrowRight,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DropdownMenu from "./DropdownMenu";
import ArtistDetails from "./ArtistDetails";

// const [minWidth, maxWidth, defaultWidth] = [100, 500, 350];
const [minWidth1, maxWidth1] = [70, 470];

export default function Sidebar({
  sidebar,
  width,
  setWidth,
  handleMax,
  handleMin,
}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  // const [sidebar, setSidebar] = useState(false);
  // const [width, setWidth] = useState(minWidth);
  const [showInput, setShowInput] = useState(false);
  const isResized = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }

      setWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX / 2;

        const isWidthInRange = newWidth >= minWidth1 && newWidth <= maxWidth1;

        return isWidthInRange ? newWidth : previousWidth;
      });
    });

    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, [setWidth]);

  return (
    <div className="flex text-white ">
      <div style={{ width: `${width / 16}rem` }}>
        <div className="rounded-xl p-2  flex flex-col gap-y-5 bg-slate-500">
          <div
            className={`${sidebar ? "flex justify-between items-center" : ""}`}
          >
            {sidebar ? (
              <div className="flex items-center gap-7">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-6 fill-white ml-4 mt-1 cursor-pointer"
                  onClick={handleMin}
                >
                  <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                </svg>
                <h3 className="font-bold">Your Library</h3>
              </div>
            ) : (
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                // viewBox="0 0 24 24"
                className="size-6 fill-white ml-4 mt-1 cursor-pointer"
                onClick={handleMax}
              >
                <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
              </svg>
            )}
            {sidebar && (
              <div className="flex gap-5 mr-3">
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            )}
          </div>

          {sidebar && (
            <>
              <div className="gridz text-center">
                <Slider {...settings} className="w-[420px]">
                  <div className="grid w-[140px] bg-[#121212] border rounded-xl">
                    <p>Playlists</p>
                  </div>
                  <div className="grid w-[140px] bg-[#121212] border rounded-xl">
                    <h3>Artists</h3>
                  </div>
                  <div className="grid w-[140px] bg-[#121212] border rounded-xl">
                    <h3>Podcast & Shows</h3>
                  </div>
                  <div className="grid w-[140px] bg-[#121212] border rounded-xl">
                    <h3>Albums</h3>
                  </div>
                </Slider>
              </div>
              {/* <div className="flex fixed items-center mt-[100px]"> */}
              <div className="flex justify-between items-center">
                <div className="">
                  <FontAwesomeIcon
                    icon={faSearch}
                    onClick={() => setShowInput(!showInput)}
                    className="absolute ml-2 mt-2 cursor-pointer"
                  />
                  <input
                    type="text"
                    name="search"
                    autoComplete="off"
                    placeholder="Search in Your Library"
                    className={`p-1 pl-8 z-[-3] rounded-md outline-none ease-in-out duration-500 ${
                      showInput
                        ? "md:w-[200px] bg-[#121212] bg-opacity-40"
                        : "md:w-[10px] bg-neutral-800"
                    }`}
                  />
                </div>
                <DropdownMenu />
              </div>
            </>
          )}
        </div>
        <div className="bg-slate-400">
          <ArtistDetails sidebar={sidebar} />
        </div>
        {/* Handle */}
      </div>
      <div
        className="w-1 cursor-col-resize"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
    </div>
  );
}
