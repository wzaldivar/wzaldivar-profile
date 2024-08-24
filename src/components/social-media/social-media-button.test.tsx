import React from 'react';

import { FaSmile as TestIcon } from 'react-icons/fa';

import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';

import SocialMediaButton, {
  SocialMediaButtonProps,
} from './social-media-button';

describe('SocialMediaButton', () => {
  const validProps: SocialMediaButtonProps = {
    'href': 'https://example.com',
    'icon': TestIcon,
    'aria-label': 'Example label',
  };

  it('renders with valid props', () => {
    const { getByRole } = render(<SocialMediaButton {...validProps} />);

    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('aria-label')).toBe(validProps['aria-label']);
    expect(link.getAttribute('href')).toBe(validProps['href']);

    const icon = link.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon?.getAttribute('aria-hidden')).toBe('true');
  });
});
