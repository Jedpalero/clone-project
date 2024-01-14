import { Outlet } from "react-router-dom";
import SidebarSection from "./components/SidebarSection";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <SidebarSection />
      <main className="py-3">
        <Outlet sidebar={sidebar} />
      </main>
    </>
  );
}

export default App;
