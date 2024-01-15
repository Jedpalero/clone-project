import { Outlet } from "react-router-dom";
import SidebarSection from "./components/SidebarSection";

function App() {
  return (
    <div className="flex">
      <SidebarSection />

      <main className="py-3 px-2 w-full h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
