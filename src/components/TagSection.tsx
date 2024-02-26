import details from "../data/dataLanguage";

const TagSection = () => {
  return (
    <div className="flex gap-3 text-white mt-3 ml-3">
      {details.map((detail) => (
        <ul key={detail.language} className="">
          <li
            className="text-center text-sm font-semibold rounded-lg bg-[#282828] whitespace-nowrap pr-4 pl-4 p-1"
            style={{
              backgroundColor: `${detail.bg}`,
              color: `${detail.text}`,
            }}
          >
            {detail.language}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TagSection;
