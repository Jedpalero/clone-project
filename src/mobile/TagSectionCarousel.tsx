import details from "../data/dataLanguage";
import { motion } from "framer-motion";
import { useRef } from "react";
import { IoCompassOutline } from "react-icons/io5";

type TagSectionCarouselProps = {
  openCloseDropDown: () => void;
};

const TagSectionCarousel = ({ openCloseDropDown }: TagSectionCarouselProps) => {
  const slide = useRef(null);

  return (
    <motion.div
      ref={slide}
      whileTap={{ cursor: "grabbing" }}
      className="flex text-white mt-1.5 ml-3"
    >
      <motion.div drag="x" dragConstraints={slide} className="flex gap-4">
        <motion.div className="mr-3 pl-2 pr-2 pt-1.5 p-1.5 bg-[#282828]">
          <IoCompassOutline onClick={openCloseDropDown} className="h-6 w-7" />
        </motion.div>
        {details.map((detail) => (
          <ul key={detail.language}>
            <li
              className="text-center text-sm font-semibold rounded-lg bg-[#282828] whitespace-nowrap p-2 pl-4 pr-4"
              style={{
                backgroundColor: `${detail.bg}`,
                color: `${detail.text}`,
              }}
            >
              {detail.language}
            </li>
          </ul>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TagSectionCarousel;
