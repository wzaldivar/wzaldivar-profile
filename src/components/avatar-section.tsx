import Image from "next/image";
import profileImage from "../../public/profile_picture.jpeg";
import SocialMediaBar from "./social-media-bar";
import ScrollButton from "./scroll-button";
import { FunctionComponent } from "react";

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
