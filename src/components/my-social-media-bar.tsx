import { FunctionComponent } from 'react';

import SocialMediaBar from '@/components/social-media';
import {
  socialMediaBarAriaLabel,
  socialMediaButtonsProps,
} from '@/data/social-media';

const MySocialMediaBar: FunctionComponent = () => {
  return (
    <SocialMediaBar
      aria-label={socialMediaBarAriaLabel}
      buttons={socialMediaButtonsProps}
    />
  );
};

export default MySocialMediaBar;
