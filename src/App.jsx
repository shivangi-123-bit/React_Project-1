import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      {/* onclick expect to pass a function in it */}
      <div className="flex flex-wrap align-middle justify-around mx-60">
        <button
          onClick={() => setColor("olive")}                              
          className="px-7 py-2 rounded-3xl m-2 border hover:opacity-[0.6] bg-[olive] text-white"
        >
          Olive
        </button>
        <button
          onClick={() => setColor("Yellow")}
          className="px-7 py-2 rounded-3xl m-2 border hover:opacity-[0.6] bg-yellow-600 text-white"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("red")}
          className="px-7 py-2 rounded-3xl m-2 border hover:opacity-[0.6] bg-red-600 text-white"
        >
          Red
        </button>
        <button
          onClick={() => setColor("black")}
          className="px-7 py-2 rounded-3xl m-2 border hover:opacity-[0.6] bg-black text-white"
        >
          Black
        </button>
        <button
          onClick={() => setColor("white")}
          className="px-7 py-2 rounded-3xl m-2 border hover:opacity-[0.6] bg-white text-black"
        >
          White
        </button>
      </div>
    </div>
  );
}

export default App;
