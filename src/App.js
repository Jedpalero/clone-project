import HeaderSection from "./components/HeaderSection";
import LandingSection from "./components/LandingSection";
import SidebarSection from "./components/SidebarSection";
import { useState, useEffect } from "react";
import TagSection from "./components/TagSection";
import FooterSection from "./components/FooterSection";

function App() {
  const [sidebar, setSidebar] = useState(false);
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

  // to detect outside click
  const openCloseDropDown = () => {
    setSidebar((prev) => !prev);
  };

  const closeDropDown = () => {
    if (sidebar && isMobile) {
      setSidebar(false);
    }
  };

  return (
    <div
      className={`h-screen w-[100%] grid  grid-rows-[60px_1fr] grid-cols-[0px_1fr] ${
        sidebar ? "md:grid-cols-[240px_1fr] " : "md:grid-cols-[90px_1fr]"
      }`}
    >
      <header
        className="header fixed w-[inherit]  max-w-[inherit] md:z-10"
        onClick={closeDropDown}
      >
        <HeaderSection
          sidebar={sidebar}
          setSidebar={setSidebar}
          openCloseDropDown={openCloseDropDown}
        />
      </header>

      <section
        className={`md:bg-[#0f0f0f]  bg-[#212121]  sidebar md:fixed md:block  scrollbar max-h-[inherit] md:z-0 z-10 ${
          sidebar ? "md:hover:overflow-y-scroll overflow-y-hidden" : "hidden "
        }`}
      >
        <SidebarSection sidebar={sidebar} setSidebar={setSidebar} />
      </section>

      <main
        className="main grid-rows-[60px_1fr] col-span-2"
        onClick={closeDropDown}
      >
        <div className="section fixed w-[100%] max-w-[100%] h-[60px] bg-[#0f0f0f] md:z-[1] z-[-2]">
          <TagSection />
        </div>
        <div className="section1  bg-[#0f0f0f]">
          <LandingSection />
        </div>
        <div className="footer fixed bottom-0 w-[100%] max-w-[100%] md:hidden bg-[#0f0f0f]">
          <FooterSection sidebar={sidebar} />
        </div>
      </main>
    </div>
  );
}

export default App;
