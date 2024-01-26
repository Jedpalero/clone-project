import cards from "../data/cardDetails";

const Card = ({ sidebar }) => {
  return (
    <div className="gridzz">
      {cards.slice(0, 5).map((card) => (
        <div
          key={card.title}
          className={`card cursor-pointer rounded-xl bg-transparent p-3 ${
            sidebar ? "h-[20rem] w-[18rem]" : "h-[20rem] w-[20rem]"
          }`}
        >
          {/* <div
          key={card.title}
          className={`card cursor-pointer rounded-xl bg-transparent${
            sidebar ? "h-[18rem] w-[20rem] " : "h-[20rem] w-[20rem] "
          }`}
        > */}
          <img
            alt="thumbnail"
            src={card.imgLink}
            className="rounded-xl"
            // className="rounded-xl h-[100%]  w-[100%]"
          />
          {/* <div className="flex gap-3 mt-2 "> */}
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
