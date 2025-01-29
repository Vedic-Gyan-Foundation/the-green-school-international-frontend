import React from "react";

const Button = ({ clickHandler, children }) => {
  return (
    <button
      className="bg-yellow-300 hover:bg-yellow-500 hover:text-white cursor-pointer border-none outline-none w-fit px-3 py-2 rounded-md font-semibold text-sm mt-auto"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
