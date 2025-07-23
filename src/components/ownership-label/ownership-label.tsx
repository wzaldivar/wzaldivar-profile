import React, { FunctionComponent } from 'react';

import useCurrentYear from './hooks/use-current-year';

interface CopyrightLabelProps {
  owner?: string;
  year?: boolean | number;
}

const OwnershipLabel: FunctionComponent<CopyrightLabelProps> = ({
  owner,
  year = true,
}) => {
  const currentYear = useCurrentYear();

  const selectYear = () => (year ? currentYear : undefined);

  const outputYear = typeof year === 'number' ? year : selectYear();

  const copyrightLabel = `${owner ?? ''}${owner && outputYear ? ' - ' : ''}${outputYear ?? ''}`;

  return <div className="ownership-label">{copyrightLabel}</div>;
};

export default OwnershipLabel;
