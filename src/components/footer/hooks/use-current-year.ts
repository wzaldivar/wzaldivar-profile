import { useEffect, useRef, useState } from 'react';

export const getTimerInterval = (): number => {
  return 1_000;
};

export const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState<number>();

  const timerRef = useRef<NodeJS.Timer>();

  const [timerInterval, setTimerInterval] = useState<number>(
    getTimerInterval(),
  );

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleTimer = () => {
    const newYear = new Date().getFullYear();
    const newTimerInterval = getTimerInterval();

    if (newTimerInterval != timerInterval) {
      startTimer(newTimerInterval);
      setTimerInterval(newTimerInterval);
    }

    if (newYear != currentYear) {
      setCurrentYear(newYear);
    }
  };

  const startTimer = (currentTimerInterval: number) => {
    clearTimer();
    timerRef.current = setInterval(handleTimer, currentTimerInterval);
  };

  useEffect(() => {
    startTimer(timerInterval);

    handleTimer();

    return () => {
      clearTimer();
    };
  }, [currentYear]);

  return currentYear;
};
