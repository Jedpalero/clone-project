import {
  faChevronDown,
  faClock,
  faClockRotateLeft,
  faPlay,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarDetails = () => {
  return (
    <div className="">
      <hr className="mt-[210px] w-[200px] m-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[50px]">
        <FontAwesomeIcon icon={faUser} className="border" />
        <h3 className="">Your channel</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faClockRotateLeft} />
        <h3 className="">History</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faPlay} className="border h-4 p-[2px]" />
        <h3 className="">Your videos</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faClock} />
        <h3 className="">Watch later</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <hr className="mt-[20px] w-[200px] m-auto h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <h3 className="ml-6 mt-2">Subscriptions</h3>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <img
          id="img"
          draggable="false"
          className="rounded-full"
          height="24"
          width="24"
          alt=""
          src="https://yt3.ggpht.com/sPhNL3tZ0hBV2WYCvPAIGAYQ_E0fiunw2TQlyDJuYAQbyVnA6Ad3Ovbo-C7gJ7uU7fVnC39NSQ=s88-c-k-c0x00ffffff-no-rj"
        ></img>
        <h3 className="">CNBC</h3>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            focusable="false"
            className="fill-red-600"
          >
            <path d="M9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.11 2.13.71.71C11.55 10.11 12 9.11 12 8c0-1.11-.45-2.11-1.18-2.84l-.71.71c.55.55.89 1.3.89 2.13 0 .83-.34 1.58-.89 2.13Zm-4.93.71.71-.71C5.34 9.58 5 8.83 5 8c0-.83.34-1.58.89-2.13l-.71-.71C4.45 5.89 4 6.89 4 8c0 1.11.45 2.11 1.18 2.84Zm7.05 1.41.71.71C14.21 11.69 15 9.94 15 8s-.79-3.69-2.06-4.96l-.71.71C13.32 4.84 14 6.34 14 8c0 1.66-.68 3.16-1.77 4.25Zm-9.17.71.71-.71C2.68 11.16 2 9.66 2 8c0-1.66.68-3.16 1.77-4.25l-.71-.71C1.79 4.31 1 6.06 1 8s.79 3.69 2.06 4.96Z"></path>
          </svg>
        </div>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show 5 more</h3>
      </div>
      <hr className="mt-[20px] w-[200px] m-auto h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <h3 className="ml-6 mt-2">Subscriptions</h3>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
      <div className="cursor-pointer flex items-center ml-7 gap-12 mt-[10px]">
        <FontAwesomeIcon icon={faChevronDown} />
        <h3 className="">Show more</h3>
      </div>
    </div>
  );
};

export default SidebarDetails;
