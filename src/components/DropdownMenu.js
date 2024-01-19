import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";

const DropdownMenu = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);

  return (
    <>
      <div className="flex items-center gap-1 mr-5">
        <h3>Recent</h3>
        <TfiMenuAlt
          onClick={() => setShowDropMenu(!showDropMenu)}
          className="cursor-pointer"
        />
      </div>
      {showDropMenu && (
        <>
          {/* <section className="bg-[#121212] bg-opacity-40 p-4 absolute mt-[340px] ml-[280px] rounded-lg divide-y divide-gray-500 shadow-xl shadow-gray-500/50"> */}
          <section className="bg-[#121212] mt-[340px] ml-[290px] bg-opacity-40 p-4 absolute rounded-lg divide-y divide-gray-500 shadow-xl shadow-gray-500/50">
            <ul className="list-none mt-2 space-y-3 mb-3">
              <h6 className="text-xs">Sort by</h6>
              <li>
                <button>Recents</button>
                {/* <a href="#">Recents</a> */}
              </li>
              <li>
                <button>Recently Added</button>
                {/* <a href="#">Recently Added</a> */}
              </li>
              <li>
                <button>Alphabetical</button>
                {/* <a href="#">Alphabetical</a> */}
              </li>
              <li>{/* <a href="#">Creator</a> */}</li>
            </ul>
            <ul className="list-none space-y-3">
              <h6 className="text-xs mt-3">View as</h6>
              <li>
                <button>Compact</button>
                {/* <a href="#" className="">
                  Compact
                </a> */}
              </li>
              <li>
                <button>List</button>
                {/* <a href="#">List</a> */}
              </li>
              <li>
                <button>Grid</button>
                {/* <a href="#">Grid</a> */}
              </li>
            </ul>
          </section>
        </>
      )}
    </>
  );
};

export default DropdownMenu;
