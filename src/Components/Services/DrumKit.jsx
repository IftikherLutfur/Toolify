import React from "react";
import { NavLink } from "react-router-dom";

const DrumKit = () => {
  // List of all drum sounds from A to Z with dummy or real sound URLs
  const drumSounds = [
    { key: "A", sound: "Sound 1", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { key: "B", sound: "Sound 2", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { key: "C", sound: "Sound 3", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { key: "D", sound: "Sound 4", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { key: "E", sound: "Sound 5", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { key: "F", sound: "Sound 6", file: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { key: "G", sound: "Sound 7", file: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { key: "H", sound: "Sound 8", file: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { key: "I", sound: "Sound 9", file: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
    { key: "J", sound: "Sound 10", file: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },
    { key: "K", sound: "Sound 11", file: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
    { key: "L", sound: "Sound 12", file: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
    { key: "M", sound: "Sound 13", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { key: "N", sound: "Sound 14", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { key: "O", sound: "Sound 15", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { key: "P", sound: "Sound 16", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { key: "Q", sound: "Sound 17", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { key: "R", sound: "Sound 18", file: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { key: "S", sound: "Sound 19", file: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { key: "T", sound: "Sound 20", file: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { key: "U", sound: "Sound 21", file: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
    { key: "V", sound: "Sound 22", file: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },
    { key: "W", sound: "Sound 23", file: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
    { key: "X", sound: "Sound 24", file: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
    { key: "Y", sound: "Sound 25", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { key: "Z", sound: "Sound 26", file: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  ];

  // Play sound based on file URL
  const playSound = (file) => {
    const audio = new Audio(file);
    audio.play();
  };

  // Keyboard press event listener
  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const drum = drumSounds.find((d) => d.key === key);
    if (drum) playSound(drum.file);
  };

  React.useEffect(() => {
    // Add event listener for keypresses
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="text-center px-4">
         <nav aria-label="breadcrumb" className="w-full flex justify-center dark:bg-gray-100 dark:text-gray-800">
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
			<a rel="noopener noreferrer" className="flex items-center px-1 capitalize hover:underline">Drum Kit</a>
		</li>
		
	
	</ol>
</nav>
      <h1 className="text-4xl font-bold mb-4">Drum Kit (A-Z)</h1>
      <div className="grid grid-cols-5 gap-4">
        {drumSounds.map((drum) => (
          <button
            key={drum.key}
            onClick={() => playSound(drum.file)}
            className="bg-blue-600 text-white text-xl font-semibold p-4 rounded shadow-md hover:bg-blue-800 transition"
          >
            {drum.key} - {drum.sound}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrumKit;
