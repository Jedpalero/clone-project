import cards from "../data/shortCardDetails";
import { motion } from "framer-motion";
import { useRef } from "react";

const ShortCardCarousel = () => {
  const carousel = useRef(null);

  return (
    <motion.div
      className="ml-1 mt-5 mb-5 flex gap-[1.5rem] w-[300px]"
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex relative gap-5"
        drag="x"
        dragConstraints={carousel}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="card cursor-pointer h-[300px] w-[160px]"
          >
            <img
              alt="thumbnail"
              src={card.imgLink}
              className="rounded-lg h-[100%] w-[100%] opacity-65"
            />
            <span className="absolute w-[9rem] mt-[14rem]">
              <h3 className="font-semibold text-sm">
                {card.title.substring(0, 30)} ...
              </h3>
              <h4 className="font-semibold text-sm">{card.details}</h4>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ShortCardCarousel;
