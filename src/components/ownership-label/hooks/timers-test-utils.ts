import { afterEach, beforeEach, jest } from '@jest/globals';
import { act } from '@testing-library/react';

import { getCurrentYear, getTimerInterval } from './use-current-year';

export const setupTimers = (year = 2020) => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(`${year}-01-01T00:00:00`));
  });

  afterEach(() => {
    jest.useRealTimers();
  });
};

export const advanceYear = (year = 2020) => {
  while (year == getCurrentYear()) {
    act(() => jest.advanceTimersByTime(getTimerInterval()));
  }
};
