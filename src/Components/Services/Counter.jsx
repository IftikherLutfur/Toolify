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
        <div>
            <nav aria-label="breadcrumb" className="w-full flex justify-center p-4 dark:bg-gray-100 dark:text-gray-800">
	<ol className="flex h-8 space-x-2">
		<li className="flex items-center">
			<NavLink to={'/'}><a rel="noopener noreferrer"  title="Back to homepage" className="hover:underline">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-600">
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
				</svg>
			</a></NavLink>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
				<path d="M32 30.031h-32l16-28.061z"></path>
			</svg>
			<a rel="noopener noreferrer" className="flex items-center px-1 capitalize hover:underline">Counter</a>
		</li>
		
	
	</ol>
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