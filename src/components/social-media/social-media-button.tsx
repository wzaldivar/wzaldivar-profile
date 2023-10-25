import React, { FunctionComponent } from 'react';

import Link from 'next/link';

import { IconType } from 'react-icons';

type LinkProps = React.ComponentProps<typeof Link>;

export type SocialMediaButtonProps = LinkProps & {
  icon: IconType;
};

export const SocialMediaButton: FunctionComponent<SocialMediaButtonProps> = (
  props,
) => {
  const { href, 'icon': SocialMediaIcon, 'aria-label': ariaLabel } = props;

  return (
    <div className="social-link-frame">
      <Link
        className="social-link"
        href={href}
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <SocialMediaIcon aria-hidden={true} />
      </Link>
    </div>
  );
};
