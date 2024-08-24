import React, { FunctionComponent } from 'react';

import useCurrentYear from './hooks/use-current-year';

interface CopyrightLabelProps {
  owner?: string;
}

const OwnershipLabel: FunctionComponent<CopyrightLabelProps> = (props) => {
  const { owner } = props;

  const year = useCurrentYear();

  const copyrightLabel = `${owner ? owner : ''}${owner && year ? ' - ' : ''}${year ? year : ''}`;

  return <div className="ownership-label">{copyrightLabel}</div>;
};

export default OwnershipLabel;
