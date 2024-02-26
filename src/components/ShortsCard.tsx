import cards from "../data/shortCardDetails";

type ShortsCardProps = {
  sidebar: boolean;
  show: boolean;
};

const ShortsCard = ({ sidebar, show }: ShortsCardProps) => {
  return (
    <div className={`${show ? "flex flex-wrap gap-3" : "gridz"}`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className={` card cursor-pointer ${
            sidebar ? "h-[510px] w-[250px]" : "h-[510px] w-[240px]"
          }`}
        >
          <img
            alt="thumbnail"
            src={card.imgLink}
            className="rounded-2xl h-[100%] w-[100%]"
          />
          <div className="flex flex-col">
            <h3 className="">{card.title.substring(0, 40)} ...</h3>
            <h4 className="text-gray-400">{card.details}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortsCard;
