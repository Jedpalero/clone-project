import cards from "../data/cardDetails";

const Card = () => {
  return (
    <div className="flex gap-6">
      {cards.slice(0, 7).map((card) => (
        <div
          key={card.title}
          className="flex flex-col bg-gray-700 p-3 items-center rounded-lg"
        >
          <img alt="logo" src={card.imgLink} className="h-[165px] rounded-md" />
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
