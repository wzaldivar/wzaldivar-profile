import { FunctionComponent } from "react";
import { IconType } from "react-icons";
import Link from "next/link";

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
