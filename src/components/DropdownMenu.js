import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";

const DropdownMenu = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);

  return (
    <>
      <div className="flex items-center gap-1 ml-[315px]">
        <h3>Recent</h3>
        <TfiMenuAlt
          onClick={() => setShowDropMenu(!showDropMenu)}
          className="cursor-pointer"
        />
      </div>
      {showDropMenu && (
        <>
          <section className="bg-[#151515] p-4 absolute mt-[370px] ml-[240px] rounded-lg divide-y divide-gray-500 shadow-xl shadow-gray-500/50">
            <ul className="list-none mt-2 space-y-3 mb-3">
              <h6 className="text-xs">Sort by</h6>
              <li>
                <a href="#">Recents</a>
              </li>
              <li>
                <a href="#">Recently Added</a>
              </li>
              <li>
                <a href="#">Alphabetical</a>
              </li>
              <li>
                <a href="#">Creator</a>
              </li>
            </ul>
            <ul className="list-none space-y-3">
              <h6 className="text-xs mt-3">View as</h6>
              <li>
                <a href="#" className="">
                  Compact
                </a>
              </li>
              <li>
                <a href="#">List</a>
              </li>
              <li>
                <a href="#">Grid</a>
              </li>
            </ul>
          </section>
        </>
      )}
    </>
  );
};

export default DropdownMenu;