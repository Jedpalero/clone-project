import details from "../data/dataLanguage";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TagSection = () => {
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <div className="grids text-white mt-3 ml-3">
      {/* <Slider {...settings} className="md:w-[56rem] w-[40rem] block ml-10"> */}
      {details.map((detail) => (
        <ul key={detail.language} className="grid">
          <li className="text-center rounded-xl bg-[#282828] p-1">
            {detail.language}
          </li>
        </ul>
      ))}
      {/* </Slider> */}
    </div>
  );
};

export default TagSection;
