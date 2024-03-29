import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useContext } from "react";
import ArtistDetails from "./ArtistDetails";
import { motion } from "framer-motion";
import { MyContext } from "../MyContext";

// const [minWidth, maxWidth, defaultWidth] = [100, 500, 350];
const [minWidth1, maxWidth1] = [70, 470];

type SidebarProps = {
  sidebar: boolean;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  handleMax: () => void;
  handleMin: () => void;
};

export default function Sidebar({
  sidebar,
  width,
  setWidth,
  handleMax,
  handleMin,
}: SidebarProps) {
  const isResized = useRef(false);
  const slide = useRef(null);

  const {
    showInput,
    showDropMenu,
    openCloseInput,
    openCloseDropDown,
    closeSameFunction,
  } = useContext(MyContext);

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
    <div className="flex text-white">
      <div style={{ width: `${width / 16}rem` }} className="">
        <div className="p-2 flex flex-col">
          <div
            className={`${sidebar ? "flex justify-between items-center" : ""}`}
          >
            {sidebar ? (
              <div className="flex items-center gap-7 mb-1">
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
              <motion.div
                ref={slide}
                whileTap={{ cursor: "grabbing" }}
                className="flex text-center mt-3"
              >
                <motion.div
                  drag="x"
                  dragConstraints={slide}
                  className="flex gap-3"
                >
                  <motion.div className="w-[120px] bg-[#121212] border rounded-xl">
                    <p>Playlists</p>
                  </motion.div>
                  <motion.div className="w-[120px] bg-[#121212] border rounded-xl">
                    <h3>Artists</h3>
                  </motion.div>
                  <motion.div className="w-[190px] bg-[#121212] border rounded-xl">
                    <h3>Podcast & Shows</h3>
                  </motion.div>
                  <motion.div className="w-[120px] bg-[#121212] border rounded-xl">
                    <h3>Albums</h3>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
        <div
          className={`scrollbar edit2 h-[37rem] p-2  ${
            sidebar ? "hover:overflow-y-scroll overflow-y-hidden" : ""
          }`}
        >
          <ArtistDetails
            sidebar={sidebar}
            showInput={showInput}
            showDropMenu={showDropMenu}
            openCloseInput={openCloseInput}
            openCloseDropDown={openCloseDropDown}
            closeSameFunction={closeSameFunction}
          />
        </div>
      </div>

      {/* Handle */}
      <div
        className="flex w-2 cursor-col-resize"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
    </div>
  );
}
