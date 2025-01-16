import { useState } from "react";
import { NavLink } from "react-router-dom";

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
      <nav aria-label="breadcrumb" className="w-full flex justify-center p-4 dark:bg-gray-100 dark:text-gray-800">
                <ol className="flex h-8 space-x-2">
                    <li className="flex items-center">
                        <NavLink to={'/'}><a rel="noopener noreferrer" title="Back to homepage" className="hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-600">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                        </a></NavLink>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <a rel="noopener noreferrer" className="flex items-center px-1 capitalize hover:underline">Calculator</a>
                    </li>


                </ol>
            </nav>
      <h1 className="text-3xl text-center font-semibold mt-2">Calculator</h1>
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
