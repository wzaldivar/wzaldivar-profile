import SocialMediaBar from "./social-media-bar";
import { FunctionComponent } from "react";

const FooterSection: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="section-footer">
      <SocialMediaBar />
      <div className="copyright">WALBER ZALDIVAR © {currentYear}</div>
    </div>
  );
};

export default FooterSection;
