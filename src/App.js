import HeaderSection from "./components/HeaderSection";
import LandingSection from "./components/LandingSection";
import SidebarSection from "./components/SidebarSection";
import { useState } from "react";
import TagSection from "./components/TagSection";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div
      className={`h-screen w-[100%] grid  grid-rows-[60px_1fr] ${
        sidebar
          ? "md:grid-cols-[240px_1fr]"
          : "md:grid-cols-[90px_1fr] grid-cols-[0px_1fr]"
      }`}
    >
      <header
        className={`header fixed w-[inherit]  max-w-[inherit] md:z-10 ${
          sidebar ? "" : ""
        }`}
      >
        <HeaderSection sidebar={sidebar} setSidebar={setSidebar} />
      </header>

      <section
        className={`sidebar md:fixed md:block  scrollbar max-h-[inherit]  ${
          sidebar ? "hover:overflow-y-scroll overflow-y-hidden" : "hidden"
        }`}
      >
        <SidebarSection sidebar={sidebar} setSidebar={setSidebar} />
      </section>

      <main className="main grid-rows-[60px_1fr] col-span-2 ">
        <div className="section fixed w-[100%] max-w-[100%] h-[60px]  bg-[#0f0f0f] md:z-[1] z-[-2]">
          <TagSection />
        </div>
        <div className="section1 bg-[#0f0f0f]">
          <LandingSection />
        </div>
      </main>
    </div>

    // <div>
    //   <HeaderSection sidebar={sidebar} setSidebar={setSidebar} />
    //   <LandingSection sidebar={sidebar} />
    //   {/* <SidebarSection /> */}
    // </div>
  );
}

export default App;
