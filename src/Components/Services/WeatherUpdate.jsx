import { NavLink } from "react-router-dom";
import cloudl from '../../assets/cloudy.png'
import heavyRain from '../../assets/heavy-rain.png'
import humidity from '../../assets/humidity.png'
import drizzle from "../../assets/drizzle.png"
import snow from '../../assets/snow.png'
import sun from '../../assets/sun.png'
import sunny from '../../assets/sunny.png'
import wind from '../../assets/wind.png'
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const WeatherUpdate = () => {
    
    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false)
    const allIcons = {
        "01d": sunny,
        "01n": sunny,
        "02d": cloudl,
        "02n": cloudl,
        "03d": cloudl,
        "03n": cloudl,
        "04d": drizzle,
        "04n": drizzle,
        "09d": heavyRain,
        "09n": heavyRain,
        "10d": heavyRain,
        "10n": heavyRain,
        "13d": snow,
        "13n": snow
    }



    const search = async (city) => {
        if(city === ""){
            toast.error("Enter the city name");
            return;

        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || sunny;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })

        } catch (error) {
            setWeatherData(false)
            console.log(error);

        }
    }
    useEffect(() => {
        search("Dhaka");
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
            {/* Navigation */}
            <nav aria-label="breadcrumb" className="bg-white shadow py-4">
                <div className="container mx-auto px-4">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <NavLink to="/" className="hover:underline text-blue-600">
                                Home
                            </NavLink>
                        </li>
                        <li>/</li>
                        <li className="text-gray-600">Weather Update</li>
                    </ol>
                </div>
            </nav>

            <div className="mt-10 px-3 py-5 bg-blue-400">
                <fieldset className=" dark:text-gray-800">
                    <div className="flex">
                        <input ref={inputRef} type="text" name="price" placeholder="Search" className="flex h-10 flex-1 p-2 sm:text-sm rounded-l-md    " />
                        <button className="flex items-center bg-white px-3  rounded-r-md dark:bg-gray-300" onClick={()=>search(inputRef.current.value)}><CiSearch /> <Toaster/>
                         </button>
                    </div>

                    <div>
                        <div className="flex justify-center mt-3"> <img className="w-44" src={weatherData.icon} alt="" /></div>
                        <p name="temperature" className="text-5xl font-semibold text-center mt-3">{weatherData.temperature}°C</p>
                        <p className="text-center text-3xl font-semibold" name="location">{weatherData.location}</p>
                        <div className="flex justify-between items-center gap-4">
                            {/* Humidity */}
                            <div className="flex items-center gap-2">
                                <p>
                                    <img className="w-10 h-10" src={humidity} alt="" />
                                </p>
                                <p>
                                    {weatherData.humidity}% <br />
                                    Humidity
                                </p>
                            </div>
                            {/* Wind */}
                            <div className="flex items-center gap-2">
                                <p>
                                    <img className="w-10 h-10" src={wind} alt="" />
                                </p>
                                <p>
                                    {weatherData.windSpeed} Km/h <br />
                                    Wind Speed
                                </p>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>

        </div>
    );
};

export default WeatherUpdate;