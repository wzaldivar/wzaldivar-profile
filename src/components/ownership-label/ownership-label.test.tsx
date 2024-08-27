import React from 'react';

import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';

import { advanceYear, setupTimers } from './hooks/timers-test-utils';
import OwnershipLabel from './ownership-label';

describe('OwnershipLabel', () => {
  const owner = 'John Doe';
  const initialYear = 2020;
  const endYear = 2021;

  setupTimers(initialYear);

  it('renders with owner and current year', () => {
    const { getByText } = render(<OwnershipLabel owner={owner} />);

    expect(getByText(`${owner} - ${initialYear}`)).toBeInTheDocument();
  });

  it('renders with no owner but current year', () => {
    const { getByText } = render(<OwnershipLabel />);

    expect(getByText(`${initialYear}`)).toBeInTheDocument();
  });

  it('auto-renders when year changes with owner', async () => {
    const { getByText } = render(<OwnershipLabel owner={owner} />);

    expect(getByText(`${owner} - ${initialYear}`)).toBeInTheDocument();

    advanceYear();

    expect(getByText(`${owner} - ${endYear}`)).toBeInTheDocument();
  });

  it('auto-renders when year changes without owner', async () => {
    const { getByText } = render(<OwnershipLabel />);

    expect(getByText(`${initialYear}`)).toBeInTheDocument();

    advanceYear();

    expect(getByText(`${endYear}`)).toBeInTheDocument();
  });
});
