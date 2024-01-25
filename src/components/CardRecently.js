import cards from "../data/cardDetailsRecently";

const CardRecently = () => {
  return (
    <div className="grids mt-5 mb-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="card relative bg-[#121212] bg-opacity-40 p-3 rounded-lg w-[200px]"
        >
          <button className="icon hidden absolute  bg-[#1ed760] rounded-full p-3 drop-shadow-lg ml-[80px]">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="size-6"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </button>
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
