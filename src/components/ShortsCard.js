import cards from "../data/shortCardDetails";
// import { useState } from "react";

const ShortsCard = ({ sidebar, show }) => {
  // const [display, setDisplay] = useState(800);

  // {cards.slice(0, ImageCount()).map((card) => (
  function ImageCount() {
    // to target the specific screen size(width);
    let w = parseInt(window.innerWidth);
    if (w < 1000) {
      return 2;
    }
  }

  return (
    <div
      className={`md:space-x-1 md:gap-3 gap-4 mt-3  ${
        show ? "flex flex-wrap  " : "flex overflow-hidden"
      }`}
    >
      {cards.slice(0, ImageCount()).map((card) => (
        <div
          key={card.title}
          className={` cursor-pointer ${
            sidebar
              ? "4xl:h-[550px] 4xl:w-[260px] md:h-[520px] md:w-[233px] h-[440px] w-[170px]"
              : "4xl:h-[550px] 4xl:w-[240px] md:h-[520px] md:w-[216px] h-[440px] w-[164px]"
          }`}
        >
          <img
            alt="thumbnail"
            src="https://i.ytimg.com/vi/WqKd3mHYeA8/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDq35aEEdAIrK1SGGneOyDCTAe-0Q"
            className="rounded-2xl"
          />
          <div className=" gap-3 mt-2">
            <div>
              <h3 className="">{card.title.substring(0, 50)} ...</h3>
              <h4 className="text-gray-400">{card.details}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortsCard;
