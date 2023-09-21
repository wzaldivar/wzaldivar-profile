import { FunctionComponent } from "react";

import Link from "next/link";

import { IconType } from "react-icons";

export interface SocialMediaButtonProps {
  href: string;
  icon: IconType;
  "aria-label"?: string | undefined;
}

const SocialMediaButton: FunctionComponent<SocialMediaButtonProps> = (
  props,
) => {
  const { href, icon: SocialMediaIcon, "aria-label": ariaLabel } = props;

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

export default SocialMediaButton;
