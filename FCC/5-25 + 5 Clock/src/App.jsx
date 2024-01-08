import { useState, useEffect } from "react";

function App() {
  const [timeBreak, setTimeBreak] = useState(5);
  const [timeSession, setTimeSession] = useState(25);
  const [timingType, setTimingType] = useState("SESSION");
  const [leftTime, setLeftTime] = useState(1500);

  const [play, setPlay] = useState(false);

  const timeout = setTimeout(() => {
    if (leftTime && play) {
      setLeftTime(leftTime - 1);
    }
  }, 1000);

  function handleSessionIncrement() {
    if (timeSession < 60) {
      setTimeSession(timeSession + 1);
      setLeftTime(leftTime + 60);
    }
  }

  function handleSessionDecrement() {
    if (timeSession > 1) {
      setTimeSession(timeSession - 1);
      setLeftTime(leftTime - 60);
    }
  }

  function handleBreakIncrement() {
    if (timeBreak < 10) {
      setTimeBreak(timeBreak + 1);
    }
  }

  function handleBreakDecrement() {
    timeBreak == 1 ? setTimeBreak(timeBreak) : setTimeBreak(timeBreak - 1);
  }

  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
  };

  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if (!leftTime && timingType === "SESSION") {
      setLeftTime(timeBreak * 60);
      setTimingType("BREAK");
      audio.play();
    }
    if (!leftTime && timingType === "BREAK") {
      setLeftTime(timeSession * 60);
      setTimingType("SESSION");
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const clock = () => {
    if (play) {
      timeout;
      resetTimer();
    } else {
      clearTimeout(timeout);
    }
  };

  useEffect(() => {
    clock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, leftTime, timeout]);

  const timeFormatter = () => {
    const minutes = Math.floor(leftTime / 60);
    const seconds = leftTime - minutes * 60;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  function handleResetTime() {
    clearTimeout(timeout);
    setPlay(false);
    setLeftTime(1500);
    setTimeBreak(5);
    setTimeSession(25);
    setTimingType("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }

  const title = timingType === "SESSION" ? "Session" : "Break";

  return (
    <div className="containter mx-auto h-screen flex items-center justify-center bg-slate-400">
      <div id="app" className="text-center text-xl xl:text-5xl py-5">
        <div id="title">25 + 5 Clock</div>
        <div className="flex justify-between py-5" id="control">
          <div id="break-label" className="w-auto pr-5">
            <p>Break Length</p>
            <div className="flex justify-center">
              <button
                id="break-decrement"
                disabled={play}
                onClick={handleBreakDecrement}
              >
                <img
                  draggable="false"
                  src="assets/arrow_down.svg"
                  className="xl:w-10"
                ></img>
              </button>
              <p id="break-length">{timeBreak}</p>
              <button
                id="break-increment"
                disabled={play}
                onClick={handleBreakIncrement}
              >
                <img
                  draggable="false"
                  src="assets/arrow_up.svg"
                  className="xl:w-10"
                ></img>
              </button>
            </div>
          </div>
          <div id="session-label" className="w-auto pl-5">
            <p>Session Length</p>
            <div className="flex justify-center">
              <button
                id="session-decrement"
                disabled={play}
                onClick={handleSessionDecrement}
              >
                <img
                  draggable="false"
                  src="assets/arrow_down.svg"
                  className="xl:w-10"
                ></img>
              </button>

              <p id="session-length">{timeSession}</p>

              <button
                id="session-increment"
                disabled={play}
                onClick={handleSessionIncrement}
              >
                <img
                  draggable="false"
                  src="assets/arrow_up.svg"
                  className="xl:w-10"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto my-2 w-60">
          <div className=" border border-black rounded-md py-4">
            <p id="timer-label">{title}</p>
            <p id="time-left">{timeFormatter()}</p>
          </div>
          <div className="flex justify-center py-2 gap-2">
            <button id="start_stop" onClick={handlePlay}>
              <img
                draggable="false"
                src="assets/playPause.svg"
                alt="Play-Pause"
                className="w-16 xl:w-20"
              />
            </button>

            <button id="reset" onClick={handleResetTime}>
              <img
                draggable="false"
                src="assets/reset.svg"
                alt="Reset"
                className="xl:w-10"
              />
            </button>
          </div>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
