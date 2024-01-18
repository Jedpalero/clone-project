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
    <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[6fr_1fr] gap-y-2 p-2 bg-black">
      <div className="overflow-hidden">
        <SidebarLink sidebar={sidebar} width={width} setWidth={setWidth} />
        <Sidebar
          sidebar={sidebar}
          width={width}
          setWidth={setWidth}
          handleMax={handleMax}
          handleMin={handleMin}
        />
      </div>

      <main className="scrollbar py-3 px-2 w-full h-full overflow-hidden overflow-y-scroll bg-neutral-800 ">
        <Outlet context={[sidebar]} />
      </main>
      <div className="col-span-2 bg-neutral-800 w-full">
        <Player />
      </div>
    </div>
  );
}

export default App;
