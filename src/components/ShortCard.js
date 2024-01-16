import cards from "../data/shortCardDetails";

const ShortCard = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {cards.map((card) => (
        <div className="h-[190px] w-[180px] bg-black rounded-xl overflow-hidden mt-5">
          <h1 className="font-bold text-xl p-4">{card.title}</h1>
          <img
            alt="logo"
            src={card.imgLink}
            className="h-[100px] w-[100px] rotate-[25deg] ml-[110px] mt-[50px] "
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ShortCard;
