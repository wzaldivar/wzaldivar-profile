import React from 'react';

import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';

import {
  socialMediaBarAriaLabel,
  socialMediaButtonsProps,
} from '@/data/social-media';

import SocialMediaBar from './social-media-bar';

describe('SocialMediaBar', () => {
  it('renders with valid props', () => {
    const { getByTestId } = render(
      <SocialMediaBar
        aria-label={socialMediaBarAriaLabel}
        buttons={socialMediaButtonsProps}
      />,
    );
    const socialMediaBar = getByTestId('social-media-bar');
    expect(socialMediaBar).toBeInTheDocument();
    expect(socialMediaBar.getAttribute('aria-label')).toBe(
      socialMediaBarAriaLabel,
    );
    socialMediaButtonsProps.forEach((props) => {
      const { 'aria-label': ariaLabel } = props;
      expect(getByTestId(`test-${props.key}`).getAttribute('href')).toBe(
        props.href,
      );
      expect(getByTestId(`test-${props.key}`).getAttribute('aria-label')).toBe(
        ariaLabel,
      );
    });
  });
});
