import cards from "../data/shortCardDetails";

const ShortCard = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {cards.slice(0, 40).map((card) => (
        <div
          key={card.imgLink}
          className="h-[190px] w-[185px] rounded-xl overflow-hidden mt-5"
          style={{ backgroundColor: `${card.bgColor}` }}
        >
          <h1 className="font-bold text-xl p-4">{card.title}</h1>
          <img
            alt="logo"
            src={card.imgLink}
            className="h-[100px] w-[100px] rotate-[25deg] ml-[100px] mt-[30px] "
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ShortCard;
