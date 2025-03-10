import { NavLink } from "react-router-dom";

const Home = () => {
    const services = [
        { name: "Calculator", path: "/calculator" },
        { name: "To-Do List", path: "/toDoList" },
        { name: "Counter", path: "/counter" },
        { name: "Drum Kit", path: "/drumKit" },
        { name: "Stopwatch", path: "/stopWatch" },
        { name: "Capitalize Text Tool", path: "/textTool" },
        { name: "Quote Generator", path: "/quote" },
        { name: "Weather Update", path: "/weather" },
        { name: "Unit Convert Tool", path: "/convertTool" },
        { name: "Currency Converter", path: "/currency" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Title */}
            <h1 className="text-3xl text-center pt-14 font-bold uppercase">
                What Services Do You Need?
            </h1>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-11 gap-6 px-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="text-xl border h-12 flex items-center justify-center rounded-md font-semibold bg-purple-700 text-white hover:bg-purple-600 hover:cursor-pointer transition duration-200">
                        {service.path ? (
                            <NavLink to={service.path} className="w-full h-full flex items-center justify-center">
                                {service.name}
                            </NavLink>
                        ) : (
                            <span>{service.name}</span>
                        )}
                    </div>
                ))}
            </div>
                <h1 className="text-xl mt-10  text-center">More tools cooming...</h1>
        </div>
    );
};

export default Home;
