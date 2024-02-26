import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarLink from "./components/SidebarLink";
import { useState } from "react";
import Player from "./components/Player";
import { MyContext } from "./MyContext";

const [minWidth, maxWidth] = [70, 470];

function App() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [width, setWidth] = useState(minWidth);
  const [showInput, setShowInput] = useState(false);
  const [showDropMenu, setShowDropMenu] = useState(false);

  const openCloseDropDown = () => {
    setShowDropMenu((prev) => !prev);
  };

  const closeDropDown = () => {
    if (showDropMenu) {
      setShowDropMenu(false);
    }
  };

  const openCloseInput = () => {
    setShowInput((prev) => !prev);
  };

  const closeInput = () => {
    if (showInput) {
      setShowInput(false);
    }
  };

  const closeSameFunction = () => {
    closeDropDown();
    closeInput();
  };

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
      className={`w-full md:grid md:h-screen rounded-lg md:grid-cols-[min-content_auto] grid-rows-[8fr_1fr]  text-white md:gap-2 gap-1 p-2 ${
        sidebar ? "grid-cols-[470px_1fr]" : "grid-cols-[70px_1fr]"
      }`}
    >
      <div className="sidebar gap-1 md:grid hidden">
        <div
          className="bg-neutral-800 rounded-xl md:block hidden"
          onClick={closeSameFunction}
        >
          <SidebarLink sidebar={sidebar} width={width} setWidth={setWidth} />
        </div>

        <div className="rounded-xl overflow-hidden bg-neutral-800 md:block hidden">
          <div className="edit1 md:block hidden">
            <MyContext.Provider
              value={{
                showInput,
                showDropMenu,
                openCloseInput,
                openCloseDropDown,
                closeSameFunction,
              }}
            >
              <Sidebar
                sidebar={sidebar}
                width={width}
                setWidth={setWidth}
                handleMax={handleMax}
                handleMin={handleMin}
              />
            </MyContext.Provider>
          </div>
        </div>
      </div>

      <section
        className="main md:bg-neutral-800 scrollbar px-2 w-full h-full rounded-xl scrollbar  md:hover:overflow-y-hidden overflow-hidden"
        onClick={closeSameFunction}
      >
        <Outlet context={[sidebar]} />
      </section>

      <div
        className="player bg-neutral-800 rounded-xl md:block hidden"
        onClick={closeSameFunction}
      >
        <Player />
      </div>
    </div>
  );
}

export default App;
