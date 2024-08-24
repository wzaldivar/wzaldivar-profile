import React, { FunctionComponent } from 'react';

import MySocialMediaBar from '@/components/my-social-media-bar';
import OwnershipLabel from '@/components/ownership-label';

export const FooterSection: FunctionComponent = () => {
  return (
    <div className="section-footer">
      <MySocialMediaBar />
      <OwnershipLabel owner="Walber Zaldivar" />
    </div>
  );
};
