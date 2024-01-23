import cards from "../data/shortCardDetails";

const ShortCard = () => {
  return (
    <div className="flex flex-wrap gap-3 md:justify-normal items-center justify-between md:mb-0 mb-3">
      {cards.slice(0, 40).map((card) => (
        <div
          key={card.imgLink}
          className="md:h-[190px] md:w-[185px] h-[85px] w-[165px] md:rounded-xl rounded-md overflow-hidden md:mt-5"
          style={{ backgroundColor: `${card.bgColor}` }}
        >
          <h1 className="font-bold md:text-xl text-xs md:p-4 p-1">
            {card.title}
          </h1>
          <img
            alt="logo"
            src={card.imgLink}
            className="md:h-[100px] md:w-[100px] h-[60px] w-[60px] rotate-[25deg] md:ml-[100px] ml-[120px] md:mt-[30px] md:rounded-none rounded-lg"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ShortCard;
