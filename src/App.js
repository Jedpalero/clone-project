import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarLink from "./components/SidebarLink";
import { useState, useEffect } from "react";
import Player from "./components/Player";
import FooterMenu from "./components/FooterMenu";

const [minWidth, maxWidth] = [70, 470];

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [width, setWidth] = useState(minWidth);
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleMax = () => {
    setWidth(maxWidth);
    setSidebar(!sidebar);
  };

  const handleMin = () => {
    setWidth(minWidth);
    setSidebar(!sidebar);
  };

  return (
    <div
      className={`w-full md:grid md:h-screen rounded-lg md:grid-cols-[min-content_auto] md:grid-rows-[6fr_0.7fr]  text-white md:gap-2 gap-1 p-2 ${
        sidebar ? "grid-cols-[470px_1fr]" : "grid-cols-[70px_1fr]"
      }`}
    >
      {/* {!isMobile && ( */}
      {/* <> */}
      <div className="sidebar gap-1 md:grid hidden">
        <div className="bg-neutral-800 rounded-xl md:block hidden">
          <SidebarLink sidebar={sidebar} width={width} setWidth={setWidth} />
        </div>

        <div className="rounded-xl overflow-hidden bg-neutral-800 md:block hidden">
          <div className="edit1 md:block hidden">
            <Sidebar
              sidebar={sidebar}
              width={width}
              setWidth={setWidth}
              handleMax={handleMax}
              handleMin={handleMin}
            />
          </div>
        </div>
      </div>
      {/* </> */}
      {/* )} */}

      <section className="main md:bg-neutral-800 scrollbar px-2 w-full h-full rounded-xl scrollbar  md:hover:overflow-y-hidden overflow-hidden">
        <Outlet context={[sidebar]} />
      </section>

      <div className="player bg-neutral-800 rounded-xl md:block hidden">
        {!isMobile ? (
          <>
            <Player />
          </>
        ) : (
          <>{/* <FooterMenu sidebar={sidebar} /> */}</>
        )}
      </div>
    </div>
  );
}

export default App;
