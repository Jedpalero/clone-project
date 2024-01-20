import cards from "../data/cardDetails";

const Card = ({ sidebar }) => {
  return (
    <div className="gridzz  ml-8 mt-5 bg-transparent">
      {cards.map((card) => (
        <div
          key={card.title}
          className={` card cursor-pointer rounded-xl bg-transparent${
            sidebar ? "h-[280px] w-[300px] " : "h-[300px] w-[300px] "
          }`}
        >
          <img alt="thumbnail" src={card.imgLink} className="rounded-xl " />
          <div className="flex gap-3 mt-2 ">
            <span>
              <img
                id="img"
                draggable="false"
                className="rounded-full"
                alt=""
                width="48"
                src={card.logoLink}
              />
            </span>
            <div>
              <h3>{card.title}</h3>
              <h4 className="text-gray-400">{card.channelName}</h4>
              <h4 className="text-gray-400">{card.details}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
