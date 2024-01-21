import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const [minWidth, maxWidth] = [70, 470];

const SidebarLink = ({ sidebar, width, setWidth }) => {
  const isResized = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }

      setWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX / 2;

        const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;

        return isWidthInRange ? newWidth : previousWidth;
      });
    });

    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, [setWidth]);

  return (
    // bg-neutral-800
    <div className="flex text-white">
      <div style={{ width: `${width / 16}rem` }} className=" ">
        <div className="ml-2 mr-2">
          <div className="p-5 mt-3 flex flex-col gap-y-5">
            <NavLink
              to="/home"
              className={`${sidebar ? "flex gap-5" : ""}`}
              style={({ isActive }) => ({
                color: isActive ? "white" : "gray",
                fill: isActive ? "white" : "gray",
              })}
            >
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                className="size-6 "
                viewBox="0 0 24 24"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
              </svg>

              {sidebar && (
                <>
                  <h3 className="font-bold">Home</h3>
                </>
              )}
            </NavLink>
            <NavLink
              to="/search"
              className={`${sidebar ? "flex gap-5" : ""}`}
              style={({ isActive }) => ({
                color: isActive ? "white" : "gray",
              })}
            >
              <FontAwesomeIcon icon={faSearch} className="h-5" />
              {sidebar && (
                <>
                  <h3 className="font-bold">Search</h3>
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className="w-2 cursor-col-resize"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
    </div>
  );
};

export default SidebarLink;
