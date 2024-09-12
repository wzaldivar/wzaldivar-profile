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

  it('render with owner and no year do not change', () => {
    const { getByText } = render(<OwnershipLabel owner={owner} year={false} />);

    expect(getByText(owner)).toBeInTheDocument();

    advanceYear();

    expect(getByText(owner)).toBeInTheDocument();
  });

  it('render without owner and no year do not change', () => {
    const { container } = render(<OwnershipLabel year={false} />);

    let ownershipLabels = container.getElementsByClassName('ownership-label');
    expect(ownershipLabels.length).toBe(1);
    let ownershipLabel = ownershipLabels[0];
    expect(ownershipLabel).toBeInTheDocument();
    expect(ownershipLabel.textContent).toBe('');

    advanceYear();

    ownershipLabels = container.getElementsByClassName('ownership-label');
    expect(ownershipLabels.length).toBe(1);
    ownershipLabel = ownershipLabels[0];
    expect(ownershipLabel).toBeInTheDocument();
    expect(ownershipLabel.textContent).toBe('');
  });

  it('render with owner and fixed year do not change', () => {
    const fixedYear = 2024;
    const { getByText } = render(
      <OwnershipLabel owner={owner} year={fixedYear} />,
    );

    expect(getByText(`${owner} - ${fixedYear}`)).toBeInTheDocument();

    advanceYear();

    expect(getByText(`${owner} - ${fixedYear}`)).toBeInTheDocument();
  });

  it('render without owner and fixed year do not change', () => {
    const fixedYear = 2024;
    const { getByText } = render(<OwnershipLabel year={fixedYear} />);

    expect(getByText(`${fixedYear}`)).toBeInTheDocument();

    advanceYear();

    expect(getByText(`${fixedYear}`)).toBeInTheDocument();
  });

  it('auto-renders when year changes with owner and year', async () => {
    const { getByText } = render(<OwnershipLabel owner={owner} year={true} />);

    expect(getByText(`${owner} - ${initialYear}`)).toBeInTheDocument();

    advanceYear();

    expect(getByText(`${owner} - ${endYear}`)).toBeInTheDocument();
  });

  it('auto-renders when year changes without owner and year', async () => {
    const { getByText } = render(<OwnershipLabel year={true} />);

    expect(getByText(`${initialYear}`)).toBeInTheDocument();

    advanceYear();

    expect(getByText(`${endYear}`)).toBeInTheDocument();
  });
});
