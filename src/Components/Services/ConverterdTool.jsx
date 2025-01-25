import { useState } from "react";
import { NavLink } from "react-router-dom";

const ConverterdTool = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("Kilometer");
  const [outputValue, setOutputValue] = useState("");
  const [outputUnit, setOutputUnit] = useState("Meter");

  const unitConversionRates = {
    Kilometer: 1000,
    Meter: 1,
    Centimeter: 0.01,
    Millimeters: 0.001,
    Micrometer: 1e-6,
    Ninometer: 1e-9,
    Foot: 0.3048,
    Inch: 0.0254,
    Yard: 0.9144,
    Mile: 1609.34,
  };

  const handleConversion = () => {
    const baseValue = parseFloat(inputValue) * unitConversionRates[inputUnit]; // Convert to meters
    const convertedValue = baseValue / unitConversionRates[outputUnit]; // Convert to target unit
    setOutputValue(convertedValue.toFixed(6)); // Update the output value
  };

  const handleClear = () =>{
    setInputValue('')
    setOutputValue('')
  }


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <NavLink to="/" className="hover:underline text-blue-600">
                Home
              </NavLink>
            </li>
            <li>/</li>
            <li className="text-gray-600">Converter Tool</li>
          </ol>
        </div>
      </nav>

      {/* Conversion Tool */}
      <div className="flex justify-center bg-white p-4 items-center gap-4 mt-10">
        {/* Input Section */}
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border-[1px] py-1 px-2 rounded-sm border-purple-500"
            placeholder="Enter value"
          />
          <br />
          <select
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
            className="border-[1px] border-purple-500 rounded-sm mt-1"
          >
            {Object.keys(unitConversionRates).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        {/* Equals Sign */}
        <div>=</div>

        {/* Output Section */}
        <div>
          <input
            type="text"
            value={outputValue}
            readOnly
            className="border-[1px] py-1 px-2 rounded-sm border-purple-500"
            placeholder="Result"
          />
          <br />
          <select
            value={outputUnit}
            onChange={(e) => setOutputUnit(e.target.value)}
            className="border-[1px] border-purple-500 rounded-sm mt-1"
          >
            {Object.keys(unitConversionRates).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Convert Button */}
      <div className="flex gap-3 mt-2"><button
        onClick={handleConversion}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Convert
      </button>
      <button
        onClick={handleClear}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Clear
      </button></div>
      
    </div>
  );
};

export default ConverterdTool;
