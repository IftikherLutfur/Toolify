import { useEffect, useState } from "react";

const Navbar = () => {


  const [time, setTime] = useState("00:00:00")
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM"
    hours = hours % 12|| 12
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds < 10 ? '0' + seconds : seconds} ${meridiem}`;
    setTime(timeString);
  }

  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000); // Update the clock every second
    return () => clearInterval(intervalId); // Cleanup the interval when component is unmounted
  }, []);

        

    return (
        <div> 
            <div className="flex justify-between px-16 py-5 bg-zinc-800 text-white bg-opacity-80">
                <div>
               <h1  className="text-xl font-semibold mb-0">{time} <br />
               </h1>
                </div>
                <div>
                <h1 className="text-xl font-semibold">Welcome to the Toolify</h1>
                </div>
                <div>
                <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
	<span>Left</span>
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-gray-300 peer-checked:bg-violet-600"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
	</span>
	<span>Right</span>
</label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;