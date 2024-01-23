import { faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import details from "../data/libraryDetails";
import FooterMenu from "./FooterMenu";

const Library = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

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
        <div className="gridz text-center">
          <Slider {...settings} className="w-[380px]">
            <div className="grid w-[140px] bg-[#121212] border rounded-xl">
              <p>Playlists</p>
            </div>
            <div className="grid w-[140px] bg-[#121212] border rounded-xl">
              <h3>Artists</h3>
            </div>
            <div className="grid bg-[#121212] border rounded-xl">
              <h3>Podcast & Shows</h3>
            </div>
            <div className="grid w-[140px] bg-[#121212] border rounded-xl">
              <h3>Albums</h3>
            </div>
          </Slider>
        </div>
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
        {/* <ArtistDetails sidebar={sidebar} /> */}
      </div>
      <div className="flex w-full fixed bottom-0 left-0 md:hidden">
        <FooterMenu />
      </div>
    </div>
  );
};

export default Library;
