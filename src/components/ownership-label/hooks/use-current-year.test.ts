import { describe, expect, it, jest } from '@jest/globals';
import { renderHook } from '@testing-library/react';

import { advanceYear, setupTimers } from './timers-test-utils';
import useCurrentYear, {
  getTimerInterval,
  MILLISECONDS_IN_FORTNIGHT,
  MILLISECONDS_IN_SECOND,
} from './use-current-year';

describe('useCurrentYear', () => {
  const initialYear = 2020;
  const endYear = 2021;
  setupTimers(initialYear);

  it('getTimerInterval should decrease to 1 second', () => {
    let timerInterval = getTimerInterval();

    while (timerInterval != MILLISECONDS_IN_SECOND) {
      jest.advanceTimersByTime(timerInterval);
      const newTimerInterval = getTimerInterval();

      expect(newTimerInterval).toBeLessThanOrEqual(timerInterval);

      if (newTimerInterval != timerInterval) {
        timerInterval = newTimerInterval;
      }
    }
  });

  it('should update when year change', () => {
    const { result } = renderHook(() => useCurrentYear());

    expect(result.current).toBe(initialYear);

    advanceYear();

    expect(result.current).toBe(endYear);
    expect(getTimerInterval()).toBe(MILLISECONDS_IN_FORTNIGHT);
  });
});
