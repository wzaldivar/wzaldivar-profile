import { useCallback, useEffect, useRef, useState } from 'react';

const getCurrentYear = (): number => new Date().getFullYear();

const MILLISECONDS_IN_SECOND = 1000;
const MILLISECONDS_IN_MINUTE = 60 * MILLISECONDS_IN_SECOND;
const MILLISECONDS_IN_HOUR = 60 * MILLISECONDS_IN_MINUTE;
const MILLISECONDS_IN_DAY = 24 * MILLISECONDS_IN_HOUR;
const MILLISECONDS_IN_WEEK = 7 * MILLISECONDS_IN_DAY;
const MILLISECONDS_IN_FORTNIGHT = 2 * MILLISECONDS_IN_WEEK;

const timeThresholds = [
  {
    threshold: MILLISECONDS_IN_FORTNIGHT + 3 * MILLISECONDS_IN_DAY,
    interval: MILLISECONDS_IN_FORTNIGHT,
  },
  {
    threshold: MILLISECONDS_IN_WEEK + 3 * MILLISECONDS_IN_DAY,
    interval: MILLISECONDS_IN_WEEK,
  },
  {
    threshold: MILLISECONDS_IN_DAY + 4 * MILLISECONDS_IN_HOUR,
    interval: MILLISECONDS_IN_DAY,
  },
  {
    threshold: MILLISECONDS_IN_HOUR + 30 * MILLISECONDS_IN_MINUTE,
    interval: MILLISECONDS_IN_HOUR,
  },
  {
    threshold: 15 * MILLISECONDS_IN_MINUTE,
    interval: 10 * MILLISECONDS_IN_MINUTE,
  },
];

export const getTimerInterval = (): number => {
  const timeToNextYear =
    new Date(getCurrentYear() + 1, 0, 1, 0, 0, 0, 0).getTime() -
    new Date().getTime();

  return (
    timeThresholds.find((value) => timeToNextYear > value.threshold)
      ?.interval || MILLISECONDS_IN_SECOND
  );
};

export const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState<number>(getCurrentYear());
  const timerIntervalRef = useRef<number>(getTimerInterval());

  const timerRef = useRef<NodeJS.Timeout>();

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
