import { TfiMenuAlt } from "react-icons/tfi";

const DropdownMenu = ({ openCloseDropDown, showDropMenu }) => {
  return (
    <div className="flex absolute items-center gap-1 ml-[19rem]">
      <div className="flex items-center gap-2 ml-[4rem]">
        <h3>Recent</h3>
        <TfiMenuAlt onClick={openCloseDropDown} className="cursor-pointer" />
      </div>

      {showDropMenu && (
        <section className="bg-[#121212] fixed bg-opacity-40 p-4 mt-[24rem] h-[350px] rounded-lg shadow-xl shadow-gray-500/50">
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
      )}
    </div>
  );
};

export default DropdownMenu;
