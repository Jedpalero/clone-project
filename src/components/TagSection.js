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
    <div className="flex text-white items-center h-12 bg-[#18181b] z-[-2]">
      {/* <Slider {...settings} className="md:w-[56rem] w-[40rem] block ml-10"> */}
      {details.map((detail) => (
        <ul key={detail.language} className=" pl-8">
          <li className="px-3 py-1 whitespace-nowrap text-center rounded-md bg-gray-600">
            {detail.language}
          </li>
        </ul>
      ))}
      {/* </Slider> */}
    </div>
  );
};

export default TagSection;
