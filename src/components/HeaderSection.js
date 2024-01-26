import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMicrophone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useRef, useEffect } from "react";

const HeaderSection = ({ openCloseDropDown }) => {
  // const headerRef = useRef(null);

  // useEffect(() => {
  //   let prevScrollPos = window.scrollY;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     const headerElement = headerRef.current;
  //     if (!headerElement) {
  //       return;
  //     }
  //     if (prevScrollPos > currentScrollPos) {
  //       headerElement.style.transform = "translateY(0)";
  //     } else {
  //       headerElement.style.transform = "translateY(-200px)";
  //     }
  //     prevScrollPos = currentScrollPos;
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    // ref={headerRef}
    <div className="m-3">
      <nav className="flex md:justify-between  text-white">
        <div className="flex items-center gap-3 mb-1 md:ml-6 cursor-pointer">
          <FontAwesomeIcon
            icon={faBars}
            onClick={openCloseDropDown}
            className="md:block hidden"
          />
          <span className="flex items-center cursor-pointer">
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
            <h3 className="font-semibold text-lg md:mr-0 mr-1">YouTube</h3>
          </span>
        </div>
        <div className="flex items-center md:ml-0 ml-[180px]">
          <input
            placeholder="Search"
            name="searchBar"
            type="text"
            className="bg-transparent border-2 border-[#282828] placeholder-[#717171]  rounded-l-full md:px-2 px-1 lg:pr-[290px] pr-[5px] py-1 w-full md:block hidden"
          />
          <div className="md:bg-[#282828] h-full md:px-5 px-2 py-1 rounded-r-full cursor-pointer md:pl-3 pl-10">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="md:ml-4 ml-1 bg-[#282828] px-2.5 py-1 rounded-full cursor-pointer md:block hidden">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
        </div>
        <div className="flex items-center md:gap-6 md:pl-0 pl-1 gap-2">
          <svg
            className="h-5 cursor-pointer md:block hidden"
            fill="#ffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_iconCarrier">
              <path d="M18 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.333L22 17V7l-4 3.333V7zm-4 6h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
            </g>
          </svg>
          <FontAwesomeIcon
            icon={faBell}
            className="cursor-pointer md:block hidden"
          />
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default HeaderSection;
