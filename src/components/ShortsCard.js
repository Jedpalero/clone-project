import cards from "../data/shortCardDetails";

const ShortsCard = ({ sidebar, show }) => {
  return (
    <div className={` ml-8 mt-5 ${show ? "flex flex-wrap gap-3" : "gridz"}`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className={` card cursor-pointer ${
            sidebar ? "h-[550px] w-[260px]" : "h-[550px] w-[240px]"
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
