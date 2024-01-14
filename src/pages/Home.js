import React from "react";

const Home = ({ sidebar }) => {
  return (
    <div
      className={`pl-[10rem] flex flex-wrap bg-black h-screen w-screen fixed top-0 left-0  text-white ${
        sidebar ? "bg-white" : ""
      }`}
    >
      <div className="mr-[4rem] mt-[5rem]">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
