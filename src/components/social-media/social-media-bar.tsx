import { FunctionComponent } from "react";

import {
  socialMediaBarLabel,
  socialMediaProps,
} from "@/components/social-media/data/social-media-props";
import { SocialMediaButton } from "@/components/social-media/social-media-button";

export const SocialMediaBar: FunctionComponent = () => {
  return (
    <div className="social-link-bar" aria-label={socialMediaBarLabel}>
      {socialMediaProps.map((props, index) => {
        const { href, icon, ariaLabel } = props;

        return (
          <SocialMediaButton
            key={index}
            href={href}
            icon={icon}
            ariaLabel={ariaLabel}
          />
        );
      })}
    </div>
  );
};
