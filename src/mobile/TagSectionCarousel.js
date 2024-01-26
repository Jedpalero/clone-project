import details from "../data/dataLanguage";
import { motion } from "framer-motion";
import { useRef } from "react";

const TagSectionCarousel = () => {
  const slide = useRef();

  return (
    <motion.div
      ref={slide}
      whileTap={{ cursor: "grabbing" }}
      className="flex text-white mt-3 ml-3"
    >
      <motion.div drag="x" dragConstraints={slide} className="flex gap-4">
        {details.map((detail) => (
          <ul key={detail.language} className="">
            <li className="text-center text-sm font-semibold rounded-lg bg-[#282828] whitespace-nowrap p-2">
              {detail.language}
            </li>
          </ul>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TagSectionCarousel;
