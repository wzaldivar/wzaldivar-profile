import { FunctionComponent } from "react";

import Link from "next/link";

import { IconType } from "react-icons";

export interface SocialMediaButtonProps {
  href: string;
  icon: IconType;
  ariaLabel?: string | undefined;
}

export const SocialMediaButton: FunctionComponent<SocialMediaButtonProps> = (
  props,
) => {
  const { href, icon: SocialMediaIcon, ariaLabel } = props;

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
