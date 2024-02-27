import details from "../data/dataLanguage";
import detailLink from "../data/dataLinks";

const FooterSection = () => {
  return (
    <div className="md:fixed text-[#737373] bg-white bottom-0 left-0 right-0 md:pt-5 md:pb-16 pt-5 pb-16 ">
      <div className="space-y-3 text-xs mt-0 font-normal">
        <div className="flex gap-2 mb-2 md:max-w-5xl max-w-sm md:flex m-auto">
          <ul className="flex-wrap flex gap-2 items-center w-full">
            {details.map((detail) => (
              <li key={detail.language}>
                <a href={detail.url} className="cursor-pointer hover:underline">
                  {detail.language}
                </a>
              </li>
            ))}
            <button className="border px-2 text-xl font-bold text-gray-600 bg-gray-100">
              +
            </button>
          </ul>
        </div>
        <hr className="md:max-w-5xl md:flex md:m-auto " />

        <div className="flex md:max-w-5xl md:flex max-w-sm m-auto">
          <ul className="flex-wrap flex gap-x-6 gap-1 items-center w-full">
            {detailLink.map((detail) => (
              <li key={detail.site}>
                <a href={detail.url} className="cursor-pointer hover:underline">
                  {detail.site}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:max-w-5xl md:flex max-w-sm m-auto pt-3">
          <p>Meta &#169; 2024 </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
