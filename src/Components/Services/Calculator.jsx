import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState(""); // State for the calculator display

  // Handle button click
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString()); // Evaluate the expression (use with caution)
      } catch {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay(""); // Clear the display
    } else {
      setDisplay((prev) => prev + value); // Append the value to the display
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">Calculator</h1>
      {/* Main div */}
      <div className="flex justify-center">
        <div className="mt-5">
          <input
            type="text"
            className="border-2 w-full rounded-md text-right p-2 text-xl"
            value={display}
            readOnly
          />
          <div className="text-center w-full grid grid-cols-4 text-2xl gap-2 mt-3">
            {/* Individual buttons for numbers and operators */}
            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("9")}
            >
              9
            </button>

            <button
              className="border-[1px] rounded-full p-4 bg-orange-400 hover:bg-orange-300"
              onClick={() => handleClick("+")}
            >
              +
            </button>

            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("6")}
            >
              6
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-orange-400 hover:bg-orange-300"
              onClick={() => handleClick("-")}
            >
              -
            </button>

            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("3")}
            >
              3
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-orange-400 hover:bg-orange-300"
              onClick={() => handleClick("*")}
            >
              *
            </button>

            <button
              className="border-[1px] rounded-full p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-orange-400 hover:bg-orange-300"
              onClick={() => handleClick(".")}
            >
              .
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-orange-400 hover:bg-orange-300"
              onClick={() => handleClick("=")}
            >
              =
            </button>
            <button
              className="border-[1px] rounded-full p-4 bg-orange-400 hover:bg-orange-300"
              onClick={() => handleClick("/")}
            >
              /
            </button>

            <button
              className="border-[1px] rounded-full p-4 bg-orange-400 hover:bg-orange-300"
              onClick={() => handleClick("C")}
            >
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
