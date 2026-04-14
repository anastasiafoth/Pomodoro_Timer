import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const FOCUS_TIME = 1500; // 25 min
  const BREAK_TIME_SHORT = 300; // 5 min
  const BREAK_TIME_LONG = 900; // 15 min
  const MAX_CYCLES = 4;
  const [time, setTime] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (time !== 0 || !isRunning) return;

    if (!isBreak) {
      // Focus → Break
      const isLast = cycle + 1 >= MAX_CYCLES;
      setIsBreak(true);
      setTime(isLast ? BREAK_TIME_LONG : BREAK_TIME_SHORT);
    } else {
      // Break → Focus
      const newCycle = (cycle + 1) % MAX_CYCLES;
      setCycle(newCycle);
      setIsBreak(false);
      setTime(FOCUS_TIME);
    }
  }, [time, isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen w-screen bg-gray-200 flex items-center justify-center">
      {/*<!-- CARD -->*/}
      <main className="bg-white w-4/5 flex flex-col items-center rounded-4xl shadow-2xl border-b-8 border-cyan-900 p-10 font-mono gap-16 sm:w-96">
        <div className="flex-1 flex flex-col justify-center text-center">
          <h2 className="text-2xl sm:text-3xl">
            {isBreak ? "Break" : "Focus!"}
          </h2>
          <h2 className="text-2xl sm:text-3xl">
            (Round {cycle + 1}/{MAX_CYCLES})
          </h2>
          <h1 className="text-6xl pt-4 font-black text-cyan-900 sm:text-7xl">
            {formatTime(time)}
          </h1>
        </div>

        {/*<!-- BUTTONS -->*/}
        <section className="flex gap-8">
          <button
            aria-label="restart"
            className="fill-gray-500 hover:fill-cyan-900 hover:cursor-pointer"
            onClick={() => {
              setIsRunning(false);
              setIsBreak(false);
              setCycle(0);
              setTime(FOCUS_TIME);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
            >
              <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
            </svg>
          </button>
          {isRunning ? (
            <button
              aria-label="pause"
              className="fill-gray-500 hover:fill-cyan-900 hover:cursor-pointer"
              onClick={() => setIsRunning(!isRunning)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
              >
                <path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z" />
              </svg>
            </button>
          ) : (
            <button
              aria-label="play"
              className="fill-gray-500 hover:fill-cyan-900 hover:cursor-pointer"
              onClick={() => setIsRunning(!isRunning)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
              >
                <path d="M320-200v-560l440 280-440 280Z" />
              </svg>
            </button>
          )}
          <button
            aria-label="skip"
            className="fill-gray-500 hover:fill-cyan-900 hover:cursor-pointer"
            onClick={() => setTime(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
            >
              <path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240Z" />
            </svg>
          </button>
        </section>
        {/*<!-- BUTTONS END -->*/}
      </main>
      {/*<!-- CARD END -->*/}
    </div>
  );
}

export default App;
