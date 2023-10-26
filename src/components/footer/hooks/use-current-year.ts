import { useEffect, useRef, useState } from 'react';

const getCurrentYear = (): number => new Date().getFullYear();

export const getTimerInterval = (): number => {
  const fortnight = 14 * 24 * 60 * 60 * 1000;
  const week = 7 * 24 * 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;

  const timeToNextYear =
    new Date(getCurrentYear() + 1, 0, 1, 0, 0, 0, 0).getTime() -
    new Date().getTime();

  if (timeToNextYear > fortnight + 3 * day) return fortnight;
  if (timeToNextYear > week + 3 * day) return week;
  if (timeToNextYear > day + 4 * hour) return day;
  if (timeToNextYear > hour + 30 * minute) return hour;
  if (timeToNextYear > 15 * minute) return 10 * minute;
  return second;
};

export const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState<number>(getCurrentYear());
  const timerIntervalRef = useRef<number>(getTimerInterval());

  const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    const clearTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };

    const startTimer = () => {
      clearTimer();
      timerRef.current = setInterval(handleTimer, timerIntervalRef.current);
    };

    const handleTimer = () => {
      const newTimerInterval = getTimerInterval();
      if (newTimerInterval !== timerIntervalRef.current) {
        timerIntervalRef.current = newTimerInterval;
        startTimer();
      }

      const newYear = getCurrentYear();

      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    };

    startTimer();

    return () => {
      clearTimer();
    };
  }, [currentYear]);

  return currentYear;
};
