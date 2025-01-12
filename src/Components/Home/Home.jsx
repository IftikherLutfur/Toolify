import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl text-center mt-10 font-bold uppercase">What Services do you need?</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 px-6"> 
                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200"><NavLink to={'/calculator'}>Calculators</NavLink></p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200">To-Do List</p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200">Counter</p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200">Drum Kit</p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200">Countdown Timer</p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200"> Image Slider</p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200">Capitalize Text Tool</p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200">Search Filter</p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200">Color Changer</p>

                <p className="text-xl border-[1px] h-12 w-full flex items-center justify-center rounded-md font-semibold hover:cursor-pointer hover:bg-gray-200 transition duration-200">Jokes Generator</p>
             
            </div>
        </div>
    );
};

export default Home;