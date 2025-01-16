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
               
            </div>
        </div>
    );
};

export default Navbar;