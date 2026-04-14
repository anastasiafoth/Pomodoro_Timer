import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(1500); // 25 minutes = 1500 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {/*<!-- CARD -->*/}
      <main className="bg-white h-72 w-72 flex flex-col items-center rounded-4xl shadow-2xl border-b-8 border-cyan-900 p-10 md:h-96 md:w-96">
        {/* MIDDLE wächst automatisch */}
        <div className="flex-1 flex flex-col justify-center text-center">
          <h2 className="text-4xl ">Focus!</h2>
          <h1 className="text-6xl pt-4 font-black text-cyan-900 ">
            {formatTime(time)}
          </h1>
        </div>

        {/*<!-- BUTTONS -->*/}
        <section className="flex gap-8">
          <button
            aria-label="restart"
            onClick={() => {
              setTime(1500);
              setIsRunning(false);
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
            <button aria-label="pause" onClick={() => setIsRunning(!isRunning)}>
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
            <button aria-label="play" onClick={() => setIsRunning(!isRunning)}>
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
          <button aria-label="skip" onClick={() => setTime(0)}>
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
