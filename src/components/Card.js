import cards from "../data/cardDetails";

const Card = ({ sidebar }) => {
  return (
    <div className="gridzz">
      {cards.slice(0, 5).map((card) => (
        <div
          key={card.title}
          className={`card cursor-pointer bg-transparent md:p-3 h-[20rem] ${
            sidebar ? "md:h-[20rem] md:w-[20rem]" : "md:h-[20rem] md:w-[22rem]"
          }`}
        >
          <img
            alt="thumbnail"
            src={card.imgLink}
            className="md:rounded-xl"
            // className="rounded-xl h-[100%]  w-[100%]"
          />
          <div className="flex gap-2">
            <span>
              <img
                id="img"
                draggable="false"
                className="rounded-full max-w-[40px]"
                alt="thumbnail"
                src={card.logoLink}
              />
            </span>
            <div>
              <h3>{card.title}</h3>
              <div className="md:block flex gap-2">
                <h4 className="text-gray-400 md:text-sm text-xs">
                  {card.channelName}
                </h4>
                <h4 className="text-gray-400 md:text-sm text-xs">
                  {card.details}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
