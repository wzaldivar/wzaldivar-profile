import { FunctionComponent } from "react";

import Link from "next/link";

import { IconType } from "react-icons";

interface SocialMediaButtonProps {
  href: string;
  icon: IconType;
}

const SocialMediaButton: FunctionComponent<SocialMediaButtonProps> = ({
  href,
  icon: SocialMediaIcon,
}) => {
  return (
    <div className="social-link-frame">
      <Link className="social-link" href={href} rel="noopener noreferrer">
        <SocialMediaIcon />
      </Link>
    </div>
  );
};

export default SocialMediaButton;
