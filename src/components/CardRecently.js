import cards from "../data/cardDetailsRecently";

const CardRecently = () => {
  return (
    <div className="grids mt-5 mb-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="card  bg-[#121212] bg-opacity-40 p-3 rounded-lg w-[200px]"
        >
          <img
            alt="logo"
            src={card.imgLink}
            className="h-[140px]  w-[140px]"
            style={{ borderRadius: `${card.boder}` }}
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

export default CardRecently;
