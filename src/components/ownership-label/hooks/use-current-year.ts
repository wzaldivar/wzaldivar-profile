import { useEffect, useRef, useState } from 'react';

export const MILLISECONDS_IN_SECOND = 1000;
export const MILLISECONDS_IN_MINUTE = 60 * MILLISECONDS_IN_SECOND;
export const MILLISECONDS_IN_HOUR = 60 * MILLISECONDS_IN_MINUTE;
export const MILLISECONDS_IN_DAY = 24 * MILLISECONDS_IN_HOUR;
export const MILLISECONDS_IN_WEEK = 7 * MILLISECONDS_IN_DAY;
export const MILLISECONDS_IN_FORTNIGHT = 2 * MILLISECONDS_IN_WEEK;

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

export const getCurrentYear = (): number => new Date().getFullYear();

export const getTimerInterval = (): number => {
  const timeToNextYear =
    new Date(getCurrentYear() + 1, 0, 1, 0, 0, 0, 0).getTime() -
    new Date().getTime();

  return (
    timeThresholds.find((value) => timeToNextYear > value.threshold)
      ?.interval ?? MILLISECONDS_IN_SECOND
  );
};

const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState<number>(getCurrentYear());

  const timerInterval = useRef<number>(getTimerInterval());
  const timer = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    const clearTimer = () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };

    const startTimer = () => {
      clearTimer();
      timer.current = setInterval(handleTimer, timerInterval.current);
    };

    const updateTimerInterval = (interval: number) => {
      if (interval !== timerInterval.current) {
        timerInterval.current = interval;
        startTimer();
      }
    };

    const updateYear = (year: number) => {
      if (year !== currentYear) {
        setCurrentYear(year);
      }
    };

    const handleTimer = () => {
      updateTimerInterval(getTimerInterval());
      updateYear(getCurrentYear());
    };

    startTimer();

    return () => {
      clearTimer();
    };
  }, [currentYear]);

  return currentYear;
};

export default useCurrentYear;
