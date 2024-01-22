import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const ArtistDetails = ({ sidebar, setWidth, width }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className={`space-y-3 ${sidebar ? "" : ""}`}>
      {sidebar && (
        <>
          <div className="flex items-center overflow-hidden">
            <div className="z-10">
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => setShowInput(!showInput)}
                className="ml-2 mt-2 cursor-pointer"
              />
            </div>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search in Your Library"
              className={`p-2 pl-8 rounded-md outline-none ease-in-out duration-500 absolute ${
                showInput
                  ? "md:w-[200px] bg-[#121212] bg-opacity-40"
                  : "md:w-[10px] bg-transparent"
              }`}
            />
            <DropdownMenu />
          </div>
        </>
      )}
      <div className={` ${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://misc.scdn.co/liked-songs/liked-songs-64.png"
          alt="logo"
          className="h-[50px] w-[50px] rounded-md"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">Liked Songs</h3>
            <h4 className="text-[15px]">📌 Playlist . 23 songs</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://i.scdn.co/image/ab6761610000e5eb08b1ae876402b0a3c83d0030"
          alt="logo"
          className="h-[50px] w-[50px] rounded-full"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">Hillsong UNITED</h3>
            <h4 className="text-[15px]">Artist</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273cb7810e96a587186d839b7e2"
          alt="logo"
          className="h-[50px] w-[50px] rounded-md"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">United We Stand</h3>
            <h4 className="text-[15px]">Artist</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://i.scdn.co/image/ab67616100005174ca0918f9408c1367373f900f"
          alt="logo"
          className="h-[50px] w-[50px] rounded-full"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">Jesus Culture</h3>
            <h4 className="text-[15px]">Artist</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://i.scdn.co/image/ab6761610000517426ba038009b1df29342addbd"
          alt="logo"
          className="h-[50px] w-[50px] rounded-full"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">Phil Wickham</h3>
            <h4 className="text-[15px]">Artist</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://mosaic.scdn.co/60/ab67656300005f1f244bf6aabda23eebf650739bab67656300005f1f9dad33d8bf704c8a28e706cbab67656300005f1fc019e9eecf1e8d7b7ad68128ab67656300005f1feb7f63070c9bdf3f8a0733ab"
          alt="logo"
          className="h-[50px] w-[50px] rounded-md"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">free audiobooks 📚</h3>
            <h4 className="text-[15px]">Playlist . sal</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://i.scdn.co/image/ab6761610000e5eb5b4f7224dc981dfa3561288c"
          alt="logo"
          className="h-[50px] w-[50px] rounded-full"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">Decibel Worship</h3>
            <h4 className="text-[15px]">Artist</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://i.scdn.co/image/b85deaeeba8144f7f85808156ad12c0fd822a275"
          alt="logo"
          className="h-[50px] w-[50px] rounded-full"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">Stellar Kart</h3>
            <h4 className="text-[15px]">Artist</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://i.scdn.co/image/ab6761610000f1783fa351bcd2f7a8f06a7bc3ba"
          alt="logo"
          className="h-[50px] w-[50px] rounded-full"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">Hillsong Worship</h3>
            <h4 className="text-[15px]">Artist</h4>
          </div>
        )}
      </div>
      <div className={`${sidebar ? "flex gap-3" : ""}`}>
        <img
          src="https://i.scdn.co/image/ab6761610000e5eb5b4f7224dc981dfa3561288c"
          alt="logo"
          className="h-[50px] w-[50px] rounded-full"
        />
        {sidebar && (
          <div>
            <h3 className="font-semibold">Decibel Worship</h3>
            <h4 className="text-[15px]">Artist</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistDetails;
