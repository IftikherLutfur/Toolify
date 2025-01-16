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
                        <a rel="noopener noreferrer" className="flex items-center px-1 capitalize hover:underline">Stopwatch</a>
                    </li>


                </ol>
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