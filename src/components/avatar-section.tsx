import React, { FunctionComponent } from "react";

import Image from "next/image";

import ScrollButton from "@/components/scroll-button";
import SocialMediaBar from "@/components/social-media";

type ImageProps = React.ComponentProps<typeof Image>;

type ScrollSectionProps = {
  sectionId: string;
};

const AvatarSection: FunctionComponent<ImageProps & ScrollSectionProps> = (
  props,
) => {
  const profilePicture = "/profile_picture.jpeg";

  const {
    alt = "Profile Picture of Walber Zaldivar",
    src = profilePicture,
    priority,
    fill,
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
      <ScrollButton sectionId="foo" />
    </div>
  );
};

export default AvatarSection;
