import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "./DropdownMenu";
import details from "../data/libraryDetails";

type ArtistDetailsProps = {
  sidebar: boolean;
  showInput: boolean;
  showDropMenu: boolean;
  openCloseInput: () => void;
  openCloseDropDown: () => void;
  closeSameFunction: () => void;
};

const ArtistDetails = ({
  sidebar,
  showInput,
  showDropMenu,
  openCloseInput,
  openCloseDropDown,
  closeSameFunction,
}: ArtistDetailsProps) => {
  return (
    <div className="space-y-3">
      {sidebar && (
        <>
          <div className="flex relative items-center overflow-hidden pt-3 pb-3">
            <div className="z-10">
              <FontAwesomeIcon
                icon={faSearch}
                onClick={openCloseInput}
                className="ml-2 mt-2 cursor-pointer"
              />
            </div>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search in Your Library"
              className={`p-2 pl-8 rounded-md outline-none ease-in-out duration-500 absolute ${
                showInput
                  ? "md:w-[200px] bg-[#121212] bg-opacity-40"
                  : "md:w-[10px] bg-transparent"
              }`}
            />
            <DropdownMenu
              openCloseDropDown={openCloseDropDown}
              showDropMenu={showDropMenu}
            />
          </div>
        </>
      )}

      <div className="space-y-3" onClick={closeSameFunction}>
        {details.map((detail) => (
          <div className="flex gap-3" key={detail.artist}>
            <img
              src={detail.imgLink}
              alt="logo"
              className="h-[50px] w-[50px]"
              style={{ borderRadius: `${detail.border}` }}
            />
            {sidebar && (
              <div>
                <h3 className="font-semibold">{detail.artist}</h3>
                <h4 className="text-[15px]">{detail.category}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistDetails;
