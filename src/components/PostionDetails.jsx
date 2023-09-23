import React from "react";

function PostionDetails({ medal, position, altText, prizeMoney }) {
  console.log(medal);
  return (
    <div
      className={`${
        position === "1st"
          ? "scale-125 bg-[#903AFF]/10 border-[#903AFF]"
          : "bg-[#D434FE]/10 border-[#D434FE]"
      } py-3  relative font-montserrat flex flex-col items-center border rounded-xl `}
    >
      <div
        className={`${
          position === "1st" ? "-top-[50%]" : "-top-[40%]"
        } absolute `}
      >
        <img
          src={medal}
          alt={altText}
          className={position === "1st" && "scale-125"}
        />
      </div>
      <p className="mt-10 md:mt-24 leading-none">{position}</p>
      <p className="text-[12px] md:text-[24px] leading-none">Runner</p>
      <p
        className={`${
          position === "1st" ? "text-[#903AFF]" : "text-[#D434FE]"
        } text-[14px] md:text-[32px]  mb-3  font-bold`}
      >
        {prizeMoney}
      </p>
    </div>
  );
}

export default PostionDetails;
