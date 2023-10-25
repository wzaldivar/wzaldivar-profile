import React, { FunctionComponent } from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { type } from 'os';

import ScrollButton from '@/components/scroll-button';
import SocialMediaBar from '@/components/social-media';

type ImageProps = React.ComponentProps<typeof Image>;

type ScrollSectionProps = {
  sectionId?: string;
};

type AvatarSectionProps = Omit<ImageProps, 'src' | 'alt'> &
  ScrollSectionProps & {
    src?: string | StaticImport;
    alt?: string;
  };

const AvatarSection: FunctionComponent<AvatarSectionProps> = (props) => {
  const profilePicture = '/profile_picture.jpeg';

  const {
    alt = 'Profile Picture of Walber Zaldivar',
    src = profilePicture,
    priority,
    fill,
    sectionId = 'foo',
    ...extra
  } = props;

  return (
    <div className="height-full section-avatar">
      <div className="avatar-frame">
        <Image
          priority
          className="avatar"
          fill
          alt={alt}
          src={src}
          {...extra}
        />
      </div>

      <div className="title">Walber Zaldivar</div>
      <div className="subtitle">Software Developer</div>

      <SocialMediaBar />
      <ScrollButton sectionId={sectionId} />
    </div>
  );
};

export default AvatarSection;
