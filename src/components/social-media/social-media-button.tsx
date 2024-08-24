import React, { FunctionComponent } from 'react';

import Link from 'next/link';

import { IconType } from 'react-icons';

export type SocialMediaButtonProps = React.ComponentProps<typeof Link> & {
  icon: IconType;
};

const SocialMediaButton: FunctionComponent<SocialMediaButtonProps> = ({
  icon: SocialMediaIcon,
  ...linkProps
}) => {
  return (
    <div className="social-link-frame">
      <Link {...linkProps} className="social-link" rel="noopener noreferrer">
        <SocialMediaIcon aria-hidden={true} />
      </Link>
    </div>
  );
};

export default SocialMediaButton;
