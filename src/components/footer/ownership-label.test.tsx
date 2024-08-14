import React from 'react';

import { describe, expect, it, jest } from '@jest/globals';
import { act, render, waitFor } from '@testing-library/react';

import { OwnershipLabel } from './ownership-label';

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
      jest.advanceTimersByTime(400 * 24 * 60 * 60 * 1000);
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
      jest.advanceTimersByTime(400 * 24 * 60 * 60 * 1000);
    });

    await waitFor(() => expect(getByText('2021')).toBeInTheDocument());

    jest.useRealTimers();
  });
});
