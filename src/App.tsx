import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(1500); // 25 Minuten = 1500 Sekunden
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
    <>
      {/*<!-- CARD -->*/}
      <main>
        <h2>Focus!</h2>
        <h1>{formatTime(time)}</h1>

        {/*<!-- BUTTONS -->*/}
        <section>
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
    </>
  );
}

export default App;
