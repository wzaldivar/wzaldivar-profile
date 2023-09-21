import { FunctionComponent } from "react";

import SocialMediaButton from "@/components/social-media-button";
import {
  socialMediaBarLabel,
  socialMediaButtonProps,
} from "@/data/social-media";

const SocialMediaBar: FunctionComponent = () => {
  return (
    <div className="social-link-bar" aria-label={socialMediaBarLabel}>
      {socialMediaButtonProps.map((props, index) => (
        <SocialMediaButton
          key={index}
          href={props.href}
          icon={props.icon}
          aria-label={props["aria-label"]}
        />
      ))}
    </div>
  );
};

export default SocialMediaBar;
