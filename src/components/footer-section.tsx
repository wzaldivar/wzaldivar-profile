import { FunctionComponent } from "react";

import SocialMediaBar from "@/components/social-media-bar";

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
