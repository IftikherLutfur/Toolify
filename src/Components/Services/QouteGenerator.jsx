import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const QouteGenerator = () => {
  const [qoute, setQoute] = useState("");

  const fetchQuote = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        setQoute(response.data.slip.advice);
      })
      .catch((error) => console.error("Error fetching quote:", error));
  };

  useEffect(() => {
    fetchQuote(); // Fetch initial quote on component mount
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/86/25/3b/86253b8a1d6054282c263ea98d809896.jpg')",
      }}
    >
      {/* Card */}
      <div className="bg-white p-6 rounded-md shadow-xl max-w-md text-center">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <NavLink to="/" className="hover:underline text-blue-600">
                Home
              </NavLink>
            </li>
            <li>/</li>
            <li className="text-gray-600">Quote Generator</li>
          </ol>
        </nav>

        <h1 className="text-2xl font-bold text-gray-700 mb-4">{qoute || "Loading..."}</h1>
        <button
          className="px-4 py-2 font-semibold text-blue-600 bg-gray-50 border-b-2 border-t-2 rounded-2xl border-blue-400"
          onClick={fetchQuote} // Call fetchQuote when button is clicked
        >
          GIVE ME ADVICE
        </button>
      </div>
    </div>
  );
};

export default QouteGenerator;
