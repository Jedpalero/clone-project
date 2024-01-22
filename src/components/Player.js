import {
  faBackwardStep,
  faCirclePause,
  faCirclePlay,
  faForwardStep,
  faRepeat,
  faShuffle,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { BiSolidVolumeFull } from "react-icons/bi";
import { LuLaptop2 } from "react-icons/lu";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const Player = () => {
  const [play, setPlay] = useState(false);
  const [like, setLike] = useState(false);

  return (
    <div className="flex fixed justify-between text-white mt-5">
      <div className="flex items-center gap-4 ml-3">
        <img
          src="https://i.scdn.co/image/ab67616d0000b2734f7efa8f0c494356b96797bd"
          alt="playingImage"
          className="h-[60px] w-[60px] rounded-md"
        />
        <div>
          <h1 className="font-semibold">Blessed(Live)</h1>
          <h3 className="text-xs text-gray-400">Hillsong Worship</h3>
        </div>
        {!like ? (
          <FaRegHeart
            onClick={() => setLike(!like)}
            className="cursor-pointer"
          />
        ) : (
          <FaHeart onClick={() => setLike(!like)} className="cursor-pointer" />
        )}
      </div>
      <div className="">
        <div className="ml-[630px] space-x-5 flex items-center">
          <FontAwesomeIcon icon={faShuffle} />
          <FontAwesomeIcon icon={faBackwardStep} className="h-5" />
          {!play ? (
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="h-8 cursor-pointer"
              onClick={() => setPlay(!play)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCirclePause}
              className="h-8 cursor-pointer"
              onClick={() => setPlay(!play)}
            />
          )}
          <FontAwesomeIcon icon={faForwardStep} className="h-5" />
          <FontAwesomeIcon icon={faRepeat} />
        </div>
        <div className="flex items-center gap-3 ml-[390px]">
          <h3>0:00</h3>
          <input
            type="range"
            min="1"
            className="w-[550px] appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[5px] [&::-webkit-slider-thumb]:ml-[150px] [&::-webkit-slider-thumb]:overflow-hidden [&::-webkit-slider-thumb]:rounded-full  [&::-webkit-slider-thumb]:bg-black/45 "
          />
          <h3>0:00</h3>
        </div>
      </div>
      <div className="flex ml-[400px]">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSquareCaretRight} />
          <TbMicrophone2 />
          <HiOutlineQueueList />
          <LuLaptop2 />
          <BiSolidVolumeFull />
          <input type="range" className="accent-green-500 bg-black/45" />
        </div>
      </div>
    </div>
  );
};

export default Player;
