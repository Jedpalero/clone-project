import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
// import { useState } from "react";

const FooterMenu = () => {
  return (
    <div className="flex justify-between w-full text-white bg-[#0f0f0f] bg-opacity-60 ml-2 mr-2">
      <div className="p-5 mt-1">
        <NavLink
          to="/home"
          className="flex flex-col items-center"
          style={({ isActive }) => ({
            color: isActive ? "white" : "gray",
            fill: isActive ? "white" : "gray",
          })}
        >
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            className="size-5"
            viewBox="0 0 24 24"
          >
            <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
          </svg>
          <h3 className="text-[10px]">Home</h3>
        </NavLink>
      </div>

      <div className="p-5 mt-2">
        <NavLink
          to="/search"
          className="flex flex-col items-center"
          style={({ isActive }) => ({
            color: isActive ? "white" : "gray",
          })}
        >
          <FontAwesomeIcon icon={faSearch} className="h-4" />
          <h3 className="text-[10px]">Search</h3>
        </NavLink>
      </div>

      <div className="p-5 mt-1">
        <NavLink
          to="/library"
          className="flex flex-col items-center"
          style={({ isActive }) => ({
            color: isActive ? "white" : "gray",
            fill: isActive ? "white" : "gray",
          })}
        >
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5"
          >
            <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
          </svg>
          <h3 className="text-[10px]">Your Library</h3>
        </NavLink>
      </div>

      <div className="p-5 mt-2">
        <NavLink
          className="flex flex-col items-center"
          style={({ isActive }) => ({
            color: isActive ? "gray" : "gray",
          })}
        >
          <FaSpotify className="h-4" />
          <h3 className="text-[10px]">Premium</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default FooterMenu;
