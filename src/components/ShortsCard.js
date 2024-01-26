import cards from "../data/shortCardDetails";

const ShortsCard = ({ sidebar, show }) => {
  return (
    <div className={`${show ? "flex flex-wrap gap-3" : "gridz"}`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className={` card cursor-pointer ${
            sidebar ? "h-[440px] w-[200px]" : "max-h-[510px] max-w-[210px]"
          }`}
        >
          <img
            alt="thumbnail"
            src={card.imgLink}
            className="rounded-2xl h-[100%] w-[100%]"
          />
          <div className="flex flex-col">
            <h3 className="">{card.title.substring(0, 40)} ...</h3>
            <h4 className="text-gray-400">{card.details}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortsCard;
