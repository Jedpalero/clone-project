import {
  faArrowRight,
  faBars,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DropdownMenu from "./DropdownMenu";
import ArtistDetails from "./ArtistDetails";

const LibrarySection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  const [sidebar, setSidebar] = useState(false);
  const [showInput, setShowInput] = useState(false);
  return (
    <div
      className={`bg-gray-600 rounded-xl p-2 mt-[130px] fixed flex flex-col gap-y-5 ${
        sidebar ? "pr-[20px] " : ""
      }`}
    >
      <div className={`${sidebar ? "flex gap-5" : ""}`}>
        <FontAwesomeIcon
          icon={faBars}
          className="h-5 ml-4"
          onClick={() => setSidebar(!sidebar)}
        />
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
          <div className="mb-3 text-center w-[200px] ml-4">
            <Slider
              {...settings}
              className="h-[5px] w-[380px] flex justify-between"
            >
              <div className="bg-gray-800 border rounded-xl">
                <p>Playlists</p>
              </div>
              <div className="bg-gray-800 border rounded-xl">
                <h3>Artists</h3>
              </div>
              <div className="bg-gray-800 border rounded-xl">
                <h3>Albums</h3>
              </div>
              <div className="bg-gray-800 border rounded-xl">
                <h3>Podcast & Shows</h3>
              </div>
            </Slider>
          </div>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faSearch}
              onClick={() => setShowInput(!showInput)}
              className="absolute ml-2"
            />
            <input
              type="text"
              placeholder="Search in Your Library"
              className={` p-1 pl-8 fixed z-[-3] rounded-md outline-none ease-in-out duration-500 ${
                showInput
                  ? "md:w-[200px] bg-gray-900"
                  : "md:w-[10px] bg-gray-600"
              }`}
            />
            <DropdownMenu />
          </div>
        </>
      )}
      <ArtistDetails sidebar={sidebar} />
    </div>
  );
};

export default LibrarySection;