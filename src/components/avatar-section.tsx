import { FunctionComponent } from "react";

import Image from "next/image";

import ScrollButton from "@/components/scroll-button";
import SocialMediaBar from "@/components/social-media";

import profileImage from "../../public/profile_picture.jpeg";

const AvatarSection: FunctionComponent = () => {
  return (
    <div className="height-full section-avatar">
      <div className="avatar-frame">
        <Image
          priority
          className="avatar"
          fill
          alt="Profile Picture of Walber Zaldivar"
          src={profileImage}
        ></Image>
      </div>
      {/*Name and Title*/}
      <div className="title">Walber Zaldivar</div>
      <div className="subtitle">Software Developer</div>

      <SocialMediaBar />
      <ScrollButton sectionId="foo" />
    </div>
  );
};

export default AvatarSection;
