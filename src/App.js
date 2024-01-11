import HeaderSection from "./components/HeaderSection";
import LandingSection from "./components/LandingSection";
// import SidebarSection from "./components/SidebarSection";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <HeaderSection sidebar={sidebar} setSidebar={setSidebar} />
      <LandingSection sidebar={sidebar} />
      {/* <SidebarSection /> */}
    </div>
  );
}

export default App;
