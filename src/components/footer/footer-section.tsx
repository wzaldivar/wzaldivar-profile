import { FunctionComponent } from 'react';

import { CopyrightLabel } from '@/components/footer/copyright-label';
import SocialMediaBar from '@/components/social-media';

export const FooterSection: FunctionComponent = () => {
  return (
    <div className="section-footer">
      <SocialMediaBar />
      <CopyrightLabel copyrightOwner="Walber Zaldivar" />
    </div>
  );
};
