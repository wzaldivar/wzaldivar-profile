import { FunctionComponent, useEffect } from "react";

import SocialMediaBar from "@/components/social-media-bar";

const FooterSection: FunctionComponent = () => {
  const copyrightLabel = () =>
    `Walber Zaldivar © ${new Date().getMilliseconds()}`;

  return (
    <div className="section-footer">
      <SocialMediaBar />
      <div className="copyright-label">{copyrightLabel()}</div>
    </div>
  );
};

export default FooterSection;
