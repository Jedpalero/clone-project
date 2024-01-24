import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import details from "../data/libraryDetails";
import FooterMenu from "../components/FooterMenu";
import { motion } from "framer-motion";
import { useRef } from "react";

const Library = () => {
  const slide = useRef();

  return (
    <div className="overflow-y-hidden">
      <div className="p-2 flex flex-col">
        <div className="flex justify-between items-center mt-3 mb-3">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            <h3 className="font-bold text-xl">Your Library</h3>
          </span>

          <span className="flex gap-5 mr-3">
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <motion.div
          ref={slide}
          whileTap={{ cursor: "grabbing" }}
          className="flex text-center mt-3 overflow-hidden"
        >
          <motion.div drag="x" dragConstraints={slide} className="flex gap-3">
            <motion.div className="w-[120px] bg-[#121212] border rounded-xl">
              <p>Playlists</p>
            </motion.div>
            <motion.div className="w-[120px] bg-[#121212] border rounded-xl">
              <h3>Artists</h3>
            </motion.div>
            <motion.div className="w-[190px] bg-[#121212] border rounded-xl">
              <h3>Podcast & Shows</h3>
            </motion.div>
            <motion.div className="w-[120px] bg-[#121212] border rounded-xl">
              <h3>Albums</h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="scrollbar h-[32rem]  p-3 overflow-y-scroll mb-10">
        <h3 className="text-xs mb-3">Most recent</h3>
        {details.map((detail) => (
          <div className="flex gap-3 space-y-4 mb-2" key={detail.artist}>
            <img
              src={detail.imgLink}
              alt="logo"
              className="h-[50px] w-[50px] rounded-md"
            />
            <div>
              <h3 className="font-semibold">{detail.artist}</h3>
              <h4 className="text-[15px]">{detail.category}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full fixed bottom-0 left-0 md:hidden">
        <FooterMenu />
      </div>
    </div>
  );
};

export default Library;
