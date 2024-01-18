import cards from "../data/cardDetails";

const Card = () => {
  return (
    <div className="flex gap-4 mt-5 mb-5">
      {cards.slice(0, 8).map((card) => (
        <div
          key={card.title}
          className="flex flex-col bg-[#121212] bg-opacity-40 p-3 items-center rounded-lg w-[200px]"
        >
          <img
            alt="logo"
            src={card.imgLink}
            className="h-[160px]  w-[170px] rounded-md"
          />
          <div>
            <h3 className="font-bold">{card.title}</h3>
            <p className="text-gray-400 text-sm font-semibold">
              {card.channelName.substring(0, 40)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
