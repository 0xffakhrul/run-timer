import { useEffect, useState } from "react";

export const Timer = () => {
  type WorkoutPhase = "warmup" | "workout" | "rest" | "cooldown";

  const [time, setTime] = useState(60);
  const [phase, setPhase] = useState<WorkoutPhase>("warmup");
  const [setCount, setSetCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  function getTotalTime(phase: WorkoutPhase): number {
    switch (phase) {
      case "warmup":
      case "cooldown":
        return 60;
      case "workout":
      case "rest":
        return 30;
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) return prevTime - 1;

          switch (phase) {
            case "warmup":
              setPhase("workout");
              return 30;
            case "workout":
              if (setCount < 5) {
                setPhase("rest");
                return 30;
              } else {
                setPhase("cooldown");
                return 60;
              }
            case "rest":
              setSetCount((prev) => prev + 1);
              setPhase("workout");
              return 30;
            case "cooldown":
              setIsRunning(false);
              return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, phase, setCount]);

  const progressPercentage = (1 - time / getTotalTime(phase)) * 100;

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const getPhaseColor = (phase: WorkoutPhase) => {
    switch (phase) {
      case "warmup":
      case "cooldown":
        return "#FCD34D";
      case "workout":
        return "#EF4444";
      case "rest":
        return "#3B82F6";
    }
  };

  return (
    <>
      <div className="relative w-64 h-64 mb-8">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#333"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={getPhaseColor(phase)}
            strokeWidth="10"
            strokeDasharray={`${progressPercentage * 2.83} 283`}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p
            className="text-xl uppercase"
            style={{ color: getPhaseColor(phase) }}
          >
            {phase}
          </p>
          <p className="text-6xl font-bold text-white">{time}</p>
        </div>
      </div>
      <button
        onClick={toggleTimer}
        className={`${
          isRunning
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-green-500 hover:bg-green-600"
        } text-white font-bold py-2 px-4 rounded`}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </>
  );
};
