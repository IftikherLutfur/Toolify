import { useState } from "react";
import { NavLink } from "react-router-dom";

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleIncreament = () => {
        setCount(count + 1)
    }
    const handleDecreament = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleClear = () =>{
        setCount(0)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
             <nav aria-label="breadcrumb" className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <NavLink to="/" className="hover:underline text-blue-600">
                Home
              </NavLink>
            </li>
            <li>/</li>
            <li className="text-gray-600">Counter</li>
          </ol>
        </div>
      </nav>
            <h1 className="text-3xl font-semibold text-center mt-2">You can count here</h1>
            <div className="text-center">
                <p className="text-[100px] font-semibold">{count}</p>
                <div className="">
                    <button onClick={handleIncreament} className="text-2xl mr-2 p-2 rounded-md font-semibold text-white bg-green-600">Increament</button>
                    <button onClick={handleDecreament} className="text-2xl ml-2 p-2 rounded-md font-semibold text-white bg-red-600">Decreament</button><br />
                    <button onClick={handleClear} className="text-2xl mt-4 ml-2 p-2 rounded-md font-semibold text-white bg-orange-600">All Clear</button>

                </div>     </div>
        </div>
    );
};

export default Counter;