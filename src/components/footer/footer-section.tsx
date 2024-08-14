import { FunctionComponent } from 'react';

import SocialMediaBar from '@/components/social-media';

import { OwnershipLabel } from './ownership-label';

export const FooterSection: FunctionComponent = () => {
  return (
    <div className="section-footer">
      <SocialMediaBar />
      <OwnershipLabel owner="Walber Zaldivar" />
    </div>
  );
};
