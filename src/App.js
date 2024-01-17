import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarLink from "./components/SidebarLink";
// import SidebarSection from "./components/SidebarSection";
import { useState } from "react";

const [minWidth, maxWidth] = [80, 470];

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
      <div className="scrollbar overflow-hidden">
        <SidebarLink
          sidebar={sidebar}
          setSidebar={setSidebar}
          width={width}
          setWidth={setWidth}
          minWidth={minWidth}
          maxWidth={maxWidth}
        />
        <Sidebar
          sidebar={sidebar}
          setSidebar={setSidebar}
          width={width}
          setWidth={setWidth}
          minWidth={minWidth}
          maxWidth={maxWidth}
          handleMax={handleMax}
          handleMin={handleMin}
        />
      </div>
      {/* <SidebarSection /> */}

      <main className="scrollbar py-3 px-2 w-full h-full overflow-hidden overflow-y-scroll bg-neutral-700 ">
        {/* <main className="py-3 px-2 w-[95%] h-[81.5%] bg-neutral-700 fixed ml-[90px] overflow-hidden overflox-y-scroll"> */}
        <Outlet context={[sidebar]} />
      </main>
      <div className="col-span-2 bg-neutral-700">Player</div>
    </div>
  );
}

export default App;
