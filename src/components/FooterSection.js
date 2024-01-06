import React from "react";
import details from "../data/dataLanguage";
// import datas from '../data/dataLinks';

// const details = [
//   {
//     language: "English (US)",
//     url: "#",
//   },
//   {
//     language: "Filipino",
//     url: "#",
//   },
//   {
//     language: "Bisaya",
//     url: "#",
//   },
//   {
//     language: "Español",
//     url: "#",
//   },
//   {
//     language: "日本語",
//     url: "#",
//   },
//   {
//     language: "한국어",
//     url: "#",
//   },
//   {
//     language: "中文(简体)",
//     url: "#",
//   },
//   {
//     language: "العربية",
//     url: "#",
//   },
//   {
//     language: "Português (Brasil)",
//     url: "#",
//   },
//   {
//     language: "Français (France)",
//     url: "#",
//   },
//   {
//     language: "Deutsch",
//     url: "#",
//   },
// ];

const FooterSection = () => {
  return (
    <div className="fixed text-gray-400 bg-white bottom-0 left-0 right-0 p-20">
      <div className="flex gap-2 mb-2">
        <ul className="flex-wrap flex gap-4 items-center w-full justify-center text-sm">
          {details.map((detail) => (
            <li key={detail.language} className="">
              <a href="#" className="cursor-pointer hover:underline">
                {detail.language}
              </a>
            </li>
          ))}
          <button className="border px-2 text-xl font-bold text-gray-600 bg-gray-100">
            +
          </button>
        </ul>
      </div>
      <hr />
      <div></div>
    </div>
  );
};

export default FooterSection;
