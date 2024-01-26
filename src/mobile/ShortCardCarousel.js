import cards from "../data/shortCardDetails";
import { motion } from "framer-motion";
import { useRef } from "react";

const ShortCardCarousel = () => {
  const carousel = useRef();

  return (
    <motion.div
      className="ml-8 mt-5 flex gap-[1.5rem] w-[300px]"
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div className="flex gap-5" drag="x" dragConstraints={carousel}>
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="card cursor-pointer h-[550px] w-[240px]"
          >
            <img alt="thumbnail" src={card.imgLink} className="rounded-2xl" />
            <motion.div className=" gap-3 mt-2">
              <motion.div>
                <h3 className="">{card.title.substring(0, 50)} ...</h3>
                <h4 className="text-gray-400">{card.details}</h4>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ShortCardCarousel;
