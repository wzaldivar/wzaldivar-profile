import { FunctionComponent } from 'react';

import {
  socialMediaBarAriaLabel,
  socialMediaProps,
} from '@/components/social-media/data/social-media-props';
import { SocialMediaButton } from '@/components/social-media/social-media-button';

export const SocialMediaBar: FunctionComponent = () => {
  return (
    <div className="social-link-bar" aria-label={socialMediaBarAriaLabel}>
      {socialMediaProps.map((props, index) => {
        const { href, icon, 'aria-label': ariaLabel } = props;

        return (
          <SocialMediaButton
            key={`smb-${index}`}
            href={href}
            icon={icon}
            aria-label={ariaLabel}
          />
        );
      })}
    </div>
  );
};
