import cards from "../data/shortCardDetails";

const ShortsCard = ({ sidebar, show }) => {
  return (
    <div
      className={`md:space-x-3 gap-3 mt-3 ${show ? "flex flex-wrap" : "flex"}`}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className={` cursor-pointer ${
            sidebar
              ? "4xl:h-[550px] 4xl:w-[250px] md:h-[380px] md:w-[380px] h-[320px] w-[340px]"
              : "4xl:h-[550px] 4xl:w-[250px] md:h-[310px] md:w-[330px] h-[320px] w-[340px]"
          }`}
        >
          <img
            alt="thumbnail"
            src="https://i.ytimg.com/vi/WqKd3mHYeA8/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDq35aEEdAIrK1SGGneOyDCTAe-0Q"
            className="rounded-xl"
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
