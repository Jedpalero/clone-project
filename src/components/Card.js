import cards from "../data/cardDetails";

const Card = () => {
  return (
    <div className="grids mb-5 mt-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="card rounded-lg bg-[#121212] p-3 bg-opacity-40 w-[200px]"
        >
          <img
            alt="logo"
            src={card.imgLink}
            className="h-[140px]  w-[140px] rounded-md"
          />
          <div className="">
            <h3 className="font-bold">{card.title}</h3>
            <p className="text-gray-400 text-sm font-semibold ">
              {card.channelName.substring(0, 30)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
