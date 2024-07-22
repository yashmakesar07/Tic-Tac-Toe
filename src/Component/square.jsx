import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <div className="p-1">
      <div className="m-px flex">
        {value.slice(0, 3).map((val, index) => (
          <button
            key={index}
            className="w-16 h-16 p-1 m-px bg-white text-2xl font-bold flex items-center justify-center"
            onClick={() => onSquareClick(index)}
          >
            {val}
          </button>
        ))}
      </div>
      <div className="m-px flex">
        {value.slice(3, 6).map((val, index) => (
          <button
            key={index + 3}
            className="w-16 h-16 p-1 m-px bg-white text-2xl font-bold flex items-center justify-center"
            onClick={() => onSquareClick(index + 3)}
          >
            {val}
          </button>
        ))}
      </div>
      <div className="m-px flex">
        {value.slice(6, 9).map((val, index) => (
          <button
            key={index + 6}
            className="w-16 h-16 p-1 m-px bg-white text-2xl font-bold flex items-center justify-center"
            onClick={() => onSquareClick(index + 6)}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Square;
