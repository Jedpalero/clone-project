import HeaderSection from "./components/HeaderSection";
import LandingSection from "./components/LandingSection";
import SidebarSection from "./components/SidebarSection";
import { useState, useEffect } from "react";
import TagSection from "./components/TagSection";
import FooterSection from "./components/FooterSection";
import TagSectionCarousel from "./mobile/TagSectionCarousel";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 720);

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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
      className={`h-screen w-[100%] grid  grid-rows-[50px_1fr] grid-cols-[0px_1fr] ${
        sidebar ? "md:grid-cols-[240px_1fr] " : "md:grid-cols-[90px_1fr]"
      }`}
    >
      <header className="header w-[inherit] md:z-10" onClick={closeDropDown}>
        <HeaderSection openCloseDropDown={openCloseDropDown} />
      </header>

      <section
        className={`md:bg-[#0f0f0f]  bg-[#212121]  sidebar md:fixed md:block  scrollbar max-h-[inherit] md:z-0 z-10 ${
          sidebar ? "md:hover:overflow-y-scroll overflow-y-hidden" : "hidden "
        }`}
      >
        <SidebarSection sidebar={sidebar} />
      </section>

      <main
        className="grid main overflow-hidden grid-rows-[50px_1fr] col-span-2 w-[inherit%]"
        onClick={closeDropDown}
      >
        <div className="section h-[50px] md:z-[1]  overflow-hidden md:border-none border border-gray-700 ml-[-1px] mr-[-1px]">
          {isMobile ? (
            <>
              <TagSectionCarousel openCloseDropDown={openCloseDropDown} />
            </>
          ) : (
            <>
              <TagSection />
            </>
          )}
        </div>

        <div className="section1 scrollbar overflow-y-scroll  bg-[#0f0f0f] ">
          <LandingSection isMobile={isMobile} sidebar={sidebar} />
        </div>

        <div className="footer fixed bottom-0 w-[100%] max-w-[100%] md:hidden bg-[#0f0f0f]">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}

export default App;
