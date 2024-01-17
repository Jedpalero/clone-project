import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// const [minWidth, maxWidth] = [80, 470];

const SidebarLink = ({ sidebar, width, setWidth, minWidth, maxWidth }) => {
  // const [width, setWidth] = useState(minWidth);
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
  }, []);

  return (
    <div className="flex text-white">
      <div
        style={{ width: `${width / 16}rem` }}
        className={`bg-neutral-700 ${sidebar ? "" : ""}}`}
      >
        <div className="ml-2 mr-2" style={{ width: `${width / 16}rem` }}>
          <div
            className={`rounded-xl p-5 mt-3 flex flex-col gap-y-5 ${
              sidebar ? "pr-[320px] " : ""
            }`}
          >
            <Link
              to="/home"
              state={{ sidebar }}
              className={`${sidebar ? "flex gap-5" : ""}`}
            >
              <FontAwesomeIcon icon={faHome} className="h-5" />
              {sidebar && (
                <>
                  <h3>Home</h3>
                </>
              )}
            </Link>
            <Link to="/search" className={`${sidebar ? "flex gap-5" : ""}`}>
              <FontAwesomeIcon icon={faSearch} className="h-5" />
              {sidebar && (
                <>
                  <h3>Search</h3>
                </>
              )}
            </Link>
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
