import { useState } from "react";
import { NavLink } from "react-router-dom";

const Calculator = () => {
  const [display, setDisplay] = useState(""); // State for the calculator display

  // Handle button click
  const handleClick = (value) => {
    try {
      if (value === "=") {
        // Evaluate the expression
        setDisplay(eval(display).toString()); // Warning: eval can pose security risks if inputs aren't sanitized
      } else if (value === "C") {
        // Clear the display
        setDisplay("");
      } else {
        // Append the value to the display
        setDisplay((prev) => prev + value);
      }
    } catch {
      setDisplay("Error"); // Handle evaluation errors
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <NavLink to="/" className="hover:underline text-blue-600">
                Home
              </NavLink>
            </li>
            <li>/</li>
            <li className="text-gray-600">Calculator</li>
          </ol>
        </div>
      </nav>

      {/* Title */}
      <h1 className="text-3xl text-center font-semibold mt-4 text-gray-800">
        Calculator
      </h1>

      {/* Calculator Container */}
      <div className="flex justify-center">
        <div className="mt-6 w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          {/* Display */}
          <input
            type="text"
            className="w-full border-2 rounded-md text-right p-4 text-xl bg-gray-50 focus:outline-none"
            value={display}
            readOnly
            aria-label="Calculator display"
          />

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-3 mt-4 text-xl">
            {[
              "7",
              "8",
              "9",
              "+",
              "4",
              "5",
              "6",
              "-",
              "1",
              "2",
              "3",
              "*",
              "0",
              ".",
              "=",
              "/",
              "C",
            ].map((item) => (
              <button
                key={item}
                className={`p-4 rounded-full ${
                  item === "C"
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : item === "="
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : ["+", "-", "*", "/", "."].includes(item)
                    ? "bg-orange-400 hover:bg-orange-300 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
                onClick={() => handleClick(item)}
                aria-label={`Button ${item}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
