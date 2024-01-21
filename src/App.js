import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarLink from "./components/SidebarLink";
import { useState } from "react";
import Player from "./components/Player";

const [minWidth, maxWidth] = [60, 470];

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
    // <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[6fr_1fr] gap-y-2 p-2 bg-black">
    //   <div className="sidebar overflow-hidden">
    //     <SidebarLink sidebar={sidebar} width={width} setWidth={setWidth} />
    //     <Sidebar
    //       sidebar={sidebar}
    //       width={width}
    //       setWidth={setWidth}
    //       handleMax={handleMax}
    //       handleMin={handleMin}
    //     />
    //   </div>

    //   <main className="main scrollbar py-3 px-2 w-full h-full overflow-hidden overflow-y-scroll bg-neutral-800 ">
    //     <Outlet context={[sidebar]} />
    //   </main>
    //   <div className="player col-span-2 bg-neutral-800 w-full">
    //     <Player />
    //   </div>
    // </div>
    <div
      className={`w-full grid h-screen rounded-lg grid-rows-[800px_1fr]   text-white gap-2 p-2 ${
        sidebar ? "" : ""
      }`}
    >
      <div className="sidebar gap-1">
        <div className="bg-neutral-800 rounded-xl ">
          <SidebarLink sidebar={sidebar} width={width} setWidth={setWidth} />
        </div>
        <div className="rounded-xl bg-neutral-800">
          {/* <Sidebar
            sidebar={sidebar}
            width={width}
            setWidth={setWidth}
            handleMax={handleMax}
            handleMin={handleMin}
          /> */}
        </div>
      </div>

      <section className="main bg-neutral-800 scrollbar overflow-hidden overflow-y-scroll py-3 px-2 w-full h-full gap-3">
        <Outlet context={[sidebar]} />
        {/* <div className="header h-[60px]">header</div>
        <div className="main1">main1</div> */}
      </section>
      <div className="player bg-neutral-800 ">
        <Player />
      </div>
    </div>
  );
}

export default App;
