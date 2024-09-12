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
      {buttons?.map((props) => {
        const { key, ...buttonProps } = props;
        return (
          <SocialMediaButton
            {...buttonProps}
            key={props.key}
            data-testid={props.key ? `test-${props.key}` : props.key}
          />
        );
      })}
    </div>
  );
};

export default SocialMediaBar;
