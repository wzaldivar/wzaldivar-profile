import { FunctionComponent } from 'react';

import SocialMediaBar from '@/components/social-media';

import { CopyrightLabel } from './copyright-label';

export const FooterSection: FunctionComponent = () => {
  return (
    <div className="section-footer">
      <SocialMediaBar />
      <CopyrightLabel copyright-owner="Walber Zaldivar" />
    </div>
  );
};
