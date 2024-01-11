import cards from "../data/cardDetails";

const Card = ({ sidebar }) => {
  return (
    <div className="md:flex md:flex-wrap md:space-x-3 gap-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className={` cursor-pointer ${
            sidebar
              ? "4xl:h-[280px] 4xl:w-[300px] md:h-[380px] md:w-[380px] h-[320px] w-[340px]"
              : "4xl:h-[330px] 4xl:w-[335px] md:h-[310px] md:w-[330px] h-[320px] w-[340px]"
          }`}
        >
          <img alt="thumbnail" src={card.imgLink} className="rounded-xl" />
          <div className="flex gap-3 mt-2">
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
