import { describe, expect, it, jest } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';

import useCurrentYear, { getTimerInterval } from './use-current-year';

describe('useCurrentYear', () => {
  it('getTimerInterval should decrease to 1 second', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01T00:00:00'));

    let timerInterval = getTimerInterval();

    while (timerInterval != 1000) {
      jest.advanceTimersByTime(timerInterval);
      const newTimerInterval = getTimerInterval();
      expect(newTimerInterval).toBeLessThanOrEqual(timerInterval);
      if (newTimerInterval !== timerInterval) {
        timerInterval = getTimerInterval();
      }
    }

    jest.useRealTimers();
  });

  it('should update when year change', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01T00:00:00'));
    const { result } = renderHook(() => useCurrentYear());

    expect(result.current).toBe(2020);

    while (result.current === 2020) {
      act(() => jest.advanceTimersByTime(getTimerInterval()));
    }

    expect(result.current).toBe(2021);
    jest.useRealTimers();
  });
});
