import React from "react";

const GridCard = ({ title, picture }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="border border-[#dadada] rounded-lg h-[17rem] w-[20rem]">
        <img
          src={picture}
          alt=""
          className="h-full w-full max-h-[17rem] max-w-[20rem] rounded-lg object-cover"
        />
      </div>
      <p className=" text-xl">{title}</p>
    </div>
  );
};

export default GridCard;
