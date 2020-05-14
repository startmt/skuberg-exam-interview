import { useEffect, useState } from "react";

export function useTime() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const startTime = () => {
    setTime(60);
    setStart(true);
  };
  const stopTime = () => {
    setStart(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0 && start) {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return { time, startTime, stopTime };
}
