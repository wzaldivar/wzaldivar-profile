import React from 'react';

import { describe, expect, it, jest } from '@jest/globals';
import { render } from '@testing-library/react';

import { OwnershipLabel } from './ownership-label';

jest.mock('./hooks/use-current-year', () => ({
  useCurrentYear: () => 2023,
}));

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
});
