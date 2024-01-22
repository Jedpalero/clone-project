import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarLink from "./components/SidebarLink";
import { useState } from "react";
import Player from "./components/Player";

const [minWidth, maxWidth] = [70, 470];

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [width, setWidth] = useState(minWidth);

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
      className={`w-full grid h-screen rounded-lg grid-cols-[min-content_auto] grid-rows-[6fr_0.7fr]  text-white gap-2 p-2 ${
        sidebar ? "grid-cols-[470px_1fr]" : "grid-cols-[70px_1fr]"
      }`}
    >
      <div className="sidebar gap-1">
        <div className="bg-neutral-800 rounded-xl">
          <SidebarLink sidebar={sidebar} width={width} setWidth={setWidth} />
        </div>

        <div className="rounded-xl overflow-hidden bg-neutral-800">
          <div className="edit1">
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

      <section className="main bg-neutral-800 scrollbar overflow-hidden  px-2 w-full h-full rounded-xl">
        <Outlet context={[sidebar]} />
      </section>

      <div className="player bg-neutral-800 rounded-xl">
        <Player />
      </div>
    </div>
  );
}

export default App;
