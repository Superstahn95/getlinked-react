import React from "react";

function Button({ text, type, isFullWidth, onPressButton }) {
  console.log(isFullWidth);
  return (
    <button
      onClick={onPressButton}
      type={type}
      className={`${
        isFullWidth ? "w-[100%] flex-1 py-4" : "w-[97px] md:w-[172px] h-[32px]"
      } md:h-[53px]  custom-horizontal-gradient rounded-[4px] text-white font-montserrat text-[12px] md:text-[16px]`}
    >
      {text}
    </button>
  );
}

export default Button;
