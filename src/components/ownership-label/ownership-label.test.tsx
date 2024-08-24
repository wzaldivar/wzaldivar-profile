import React from 'react';

import { describe, expect, it, jest } from '@jest/globals';
import { act, render, waitFor } from '@testing-library/react';

import { MILLISECONDS_IN_WEEK } from './hooks/use-current-year';
import OwnershipLabel from './ownership-label';

const MILLISECONDS_GREATER_THAN_A_YEAR = 53 * MILLISECONDS_IN_WEEK;

describe('OwnershipLabel', () => {
  it('renders with owner and current year', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01T00:00:00'));

    const { getByText } = render(<OwnershipLabel owner="John Doe" />);
    expect(getByText('John Doe - 2020')).toBeInTheDocument();

    jest.useRealTimers();
  });

  it('renders with no owner but current year', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01T00:00:00'));

    const { getByText } = render(<OwnershipLabel />);
    expect(getByText('2020')).toBeInTheDocument();

    jest.useRealTimers();
  });

  it('auto-renders when year changes with owner', async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01T00:00:00'));

    const { getByText } = render(<OwnershipLabel owner="John Doe" />);

    expect(getByText('John Doe - 2020')).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(MILLISECONDS_GREATER_THAN_A_YEAR);
    });

    await waitFor(() =>
      expect(getByText('John Doe - 2021')).toBeInTheDocument(),
    );

    jest.useRealTimers();
  });

  it('auto-renders when year changes without owner', async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2020-01-01T00:00:00'));

    const { getByText } = render(<OwnershipLabel />);

    expect(getByText('2020')).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(MILLISECONDS_GREATER_THAN_A_YEAR);
    });

    await waitFor(() => expect(getByText('2021')).toBeInTheDocument());

    jest.useRealTimers();
  });
});
