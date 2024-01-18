import {
  faArrowRight,
  faBars,
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
const [minWidth1, maxWidth1] = [80, 470];

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
    <div className="flex text-white mt-2 ">
      <div style={{ width: `${width / 16}rem` }} className="bg-neutral-800">
        <div className="rounded-xl p-2  flex flex-col gap-y-5">
          <div className={`${sidebar ? "flex gap-5" : ""}`}>
            {sidebar ? (
              <FontAwesomeIcon
                icon={faBars}
                className="h-5 ml-4 cursor-pointer text-[#121212]"
                onClick={handleMin}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="h-5 ml-4 text-white cursor-pointer"
                onClick={handleMax}
              />
            )}
            {sidebar && (
              <>
                <h3>Your Library</h3>
                <FontAwesomeIcon icon={faPlus} className="ml-[195px]" />
                <FontAwesomeIcon icon={faArrowRight} />
              </>
            )}
          </div>
          {sidebar && (
            <>
              <div className="mb-3 text-center w-[200px] ml-4 flex">
                <Slider
                  {...settings}
                  className="h-[5px] w-[380px] flex justify-between"
                >
                  <div className="bg-[#121212] border rounded-xl">
                    <p>Playlists</p>
                  </div>
                  <div className="bg-[#121212] border rounded-xl">
                    <h3>Artists</h3>
                  </div>
                  <div className="bg-[#121212] border rounded-xl">
                    <h3>Albums</h3>
                  </div>
                  <div className="bg-[#121212] border rounded-xl">
                    <h3>Podcast & Shows</h3>
                  </div>
                </Slider>
              </div>
              <div className="flex fixed items-center mt-[100px]">
                <FontAwesomeIcon
                  icon={faSearch}
                  onClick={() => setShowInput(!showInput)}
                  className="absolute ml-2 cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="Search in Your Library"
                  className={`p-1 pl-8 fixed z-[-3] rounded-md outline-none ease-in-out duration-500 ${
                    showInput
                      ? "md:w-[200px] bg-[#121212] bg-opacity-40"
                      : "md:w-[10px] bg-neutral-800"
                  }`}
                />
                <DropdownMenu />
              </div>
            </>
          )}
          <ArtistDetails sidebar={sidebar} />
        </div>
      </div>

      {/* Handle */}
      <div
        className="w-2 cursor-col-resize"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
    </div>
  );
}
