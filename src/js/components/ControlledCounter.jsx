import React, { useState, useEffect, useRef } from "react";
import SecondsCounter from "./SecondsCounter";

const ControlledCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  // Controlar el temporizador
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const stop = () => setIsRunning(false);
  const resume = () => setIsRunning(true);
  const reset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(true);
  };

  return (
    <div className="text-center mt-5">
      <SecondsCounter seconds={seconds} />
      <div className="mt-4 d-flex justify-content-center gap-2">
        <button className="btn btn-warning" onClick={stop}>
          <i class="fa-solid fa-stop"></i> Stop
        </button>
        <button className="btn btn-success" onClick={resume}>
          <i class="fa-solid fa-play"></i> Resume
        </button>
        <button className="btn btn-danger" onClick={reset}>
          <i class="fa-solid fa-retweet"></i> Reset
        </button>
      </div>
    </div>
  );
};

export default ControlledCounter;
