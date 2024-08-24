import React, { FunctionComponent } from 'react';

import SocialMediaButton, {
  SocialMediaButtonProps,
} from './social-media-button';

export type SocialMediaBarProps = React.ComponentProps<'div'> & {
  buttons?: SocialMediaButtonProps[];
};

const SocialMediaBar: FunctionComponent<SocialMediaBarProps> = ({
  buttons,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="social-link-bar"
      data-testid="social-media-bar"
    >
      {buttons?.map((buttonProps, index) => {
        return (
          <SocialMediaButton
            {...buttonProps}
            key={`smb-${index}`}
            data-testid={`smb-${index}`}
          />
        );
      })}
    </div>
  );
};

export default SocialMediaBar;
