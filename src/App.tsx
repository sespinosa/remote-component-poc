import { useState } from "react";
import Img from "./mati.png";
import "./App.css";

const App = () => {
  const [speed, setSpeed] = useState(5);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      {/* Buttons at the top */}
      <div className="absolute top-5 flex items-center space-x-4 z-10">
        <button
          type="button"
          onClick={() => setSpeed(speed - 0.1)}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          -
        </button>
        <b className="text-lg">{speed.toFixed(1)}</b>
        <button
          type="button"
          onClick={() => setSpeed(speed + 0.1)}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          +
        </button>
      </div>
      {/* Rotating image */}
      <div className="flex-grow flex justify-center items-center">
        <img
          src={Img}
          alt="Spinning"
          className="max-h-[80%] object-contain"
          style={{
            animation: `spin ${speed}s linear infinite`,
          }}
        />
      </div>
    </div>
  );
};

export default App;
