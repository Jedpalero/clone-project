import cards from "../data/cardDetailsRecently";
import { motion } from "framer-motion";
import { useRef } from "react";

const CardRecentlyCarousel = () => {
  // const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="gap-[1.5rem] flex  mb-5 mt-5"
    >
      <motion.div
        className="flex"
        drag="x"
        // dragConstraints={{ right: 0, left: -width }}
        dragConstraints={carousel}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="bg-[#121212] p-[10px] bg-opacity-40 h-[7rem] min-w-[7rem]"
          >
            <img
              alt="logo"
              src={card.imgLink}
              className="w-[100%] h-[100%]"
              style={{ borderRadius: `${card.boder}` }}
            />
            <motion.div>
              <h3 className="font-bold text-[10px] mt-2">{card.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CardRecentlyCarousel;
