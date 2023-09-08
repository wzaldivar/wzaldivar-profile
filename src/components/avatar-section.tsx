import Image from "next/image";
import profileImage from "../../public/profile_picture.jpeg";
import SocialMediaBar from "./social-media-bar";
import ScrollButton from "./scroll-button";

export default function AvatarSection() {
  return (
    <div className="height-full section-avatar">
      <div className="avatar-frame">
        <Image
          priority
          className="avatar"
          fill
          alt="Profile Picture"
          src={profileImage}
        ></Image>
      </div>
      <div className="title">Walber Zaldivar</div>
      <div className="subtitle">Software Developer</div>
      <SocialMediaBar />
      <ScrollButton sectionId="foo" />
    </div>
  );
}
