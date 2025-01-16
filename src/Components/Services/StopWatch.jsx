import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const StopWatch = () => {


    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)

    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [isRunning])

    const start = () => {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }
    const stop = () => {
        setIsRunning(false)
    }
    const reset = () => {
        setElapsedTime(0)
        setIsRunning(false)
    }

    const formatTime = () => {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minitues = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliSeconds = Math.floor((elapsedTime % 1000) / 10)


        return `${hours}:${minitues}:${seconds}:${milliSeconds}`
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
            <li className="text-gray-600">Stopwatch</li>
          </ol>
        </div>
      </nav>
            <h1 className="text-3xl font-semibold text-center mt-2">Stopwatch</h1>

            <div className="mt-5">
                <h1 className="text-6xl font-bold text-center">{formatTime()}</h1>
                <div className="flex justify-center  gap-3 mt-3">
                    <button onClick={start} className="px-5 py-1 rounded-md text-white font-semibold bg-green-600 hover:bg-green-700">Start</button>
                    <button onClick={stop} className="px-5 py-1 rounded-md text-white font-semibold bg-red-600 hover:bg-red-700">Stop</button>
                    <button onClick={reset} className="px-5 py-1 rounded-md text-white font-semibold bg-blue-500">Reset</button>
                </div>
            </div>

        </div>
    );
};

export default StopWatch;