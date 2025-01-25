import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Currency = () => {
    const [money1, setMoney1] = useState(1)
    const [money2, setMoney2] = useState(1)
    const [currency1, setCurrency1] = useState("USD")
    const [currency2, setCurrency2] = useState("BDT")
    const [rates, setRates] = useState({})


    useEffect(() => {
        axios
          .get(
            "https://data.fixer.io/api/latest?access_key=4d94b2ad6c9d28d04c66c654be86740f&format=1"
          )
          .then((res) => {
            setRates(res.data.rates);
          })
          .catch((error) => {
            console.error("Error fetching exchange rates:", error);
          });
      }, []);
    
      // Handle conversion logic
      useEffect(() => {
        if (rates) {
          const rate1 = rates[currency1];
          const rate2 = rates[currency2];
          if (rate1 && rate2) {
            setMoney2((money1 * rate2) / rate1);
          }
        }
      }, [money1, currency1, currency2, rates]);

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
              <li className="text-gray-600">Currency Converter</li>
            </ol>
          </div>
        </nav>
  
        {/* Conversion Tool */}
        <div className="p-4 rounded-md border-[1px] bg-white mt-5 shadow-xl">
          {/* Input Section */}
          <div className=" flex border-[1px] border-purple-500 p-2 rounded-md">
            <input
              type="number"
              value={money1}
              onChange={(e) => setMoney1(Number(e.target.value))}
              className="border-[1px] border-gray-300 p-1 rounded-sm w-full"
            />
            <select
              value={currency1}
              onChange={(e) => setCurrency1(e.target.value)}
              className="border-[1px] border-gray-300 p-1 rounded-sm"
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
  
          {/* Output Section */}
          <div className=" flex border-[1px] border-purple-500 p-2 mt-3 rounded-md">
            <input
              type="number"
              value={money2}
              readOnly
              className="border-[1px] border-gray-300 p-1 rounded-sm w-full"
            />
            <select
              value={currency2}
              onChange={(e) => setCurrency2(e.target.value)}
              className=" border-[1px] border-gray-300 p-1 rounded-sm "
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
};

export default Currency;