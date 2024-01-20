// import { useState } from "react";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarDetails from "./SidebarDetails";
// import HeaderSection from "./HeaderSection";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
// import TagSection from "./TagSection";

const SidebarSection = ({ sidebar, setSidebar }) => {
  return (
    <div
      className={`
    ${sidebar ? "z-[-1] " : ""}`}
    >
      <div className="flex flex-col px-8 py-5 cursor-pointer ">
        <div
          className={` md:hidden block gap-3 items-center ${
            sidebar ? "w-[240px] flex" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="mt-1 z-[50]"
            onClick={() => setSidebar(!sidebar)}
          />
          <span className="flex items-center cursor-pointer mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              className="size-6"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M1 1h21.77v22H1z"></path>
                <g fillRule="nonzero">
                  <path
                    fill="#F00"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                  ></path>
                  <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                </g>
              </g>
            </svg>
            <h3 className="font-semibold text-lg">YouTube</h3>
          </span>
        </div>

        <div className={`${sidebar ? "hidden md:block" : ""}`}>
          <div
            className={`gap-3 cursor-pointer  md:mt-[55px] mt-[40px] ${
              sidebar ? "md:flex items-center hidden" : ""
            }`}
          >
            <FontAwesomeIcon icon={faHome} className="text-white" />
            <h3 className={` ${sidebar ? "ml-10" : "text-xs mt-1"}`}>Home</h3>
          </div>

          <div
            className={` gap-3 cursor-pointer  ${
              sidebar ? "flex items-center" : " mt-[30px] fixed"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="fill-white"
            >
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
            </svg>
            <h3 className={` ${sidebar ? "ml-8 py-2 mt-1" : "text-xs mt-1"}`}>
              Shorts
            </h3>
          </div>
          <div
            className={`gap-3 cursor-pointer ${
              sidebar ? "flex items-center" : "mt-[110px] fixed"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="fill-white"
            >
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
            </svg>
            <h3 className={` ${sidebar ? "ml-8 py-2" : "text-[9px] mt-1"}`}>
              Subscriptions
            </h3>
          </div>

          <div
            className={`gap-3 cursor-pointer  ${
              sidebar ? "flex items-center" : "mt-[190px] fixed"
            }`}
          >
            {!sidebar && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  className="fill-white"
                >
                  You
                  <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
                </svg>
                <h3 className={` ${sidebar ? "mt-5" : "text-xs mt-1"}`}>You</h3>
              </>
            )}
          </div>
        </div>
      </div>
      <div>{sidebar && <SidebarDetails />}</div>
    </div>
  );
};

export default SidebarSection;
