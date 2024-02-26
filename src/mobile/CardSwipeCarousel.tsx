import cards from "../data/cardDetails";
import { motion } from "framer-motion";
import { useRef } from "react";

const CardSwipeCarousel = () => {
  const carousel = useRef<null>(null);

  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="gap-[1.5rem] flex  mb-10 mt-5"
    >
      <motion.div className="flex gap-5" drag="x" dragConstraints={carousel}>
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="bg-[#121212] p-[10px] bg-opacity-40 min-w-[9rem] h-[9rem]"
          >
            <img alt="logo" src={card.imgLink} className="w-[100%] h-[100%]" />
            <motion.div>
              <p className="text-gray-400 text-xs font-semibold mt-2">
                {card.channelName.substring(0, 25)}...
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CardSwipeCarousel;
