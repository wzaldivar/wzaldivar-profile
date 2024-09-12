import React, { FunctionComponent } from 'react';

import useCurrentYear from './hooks/use-current-year';

interface CopyrightLabelProps {
  owner?: string;
  year?: boolean | number;
}

const OwnershipLabel: FunctionComponent<CopyrightLabelProps> = ({
  owner,
  year,
}) => {
  const currentYear = useCurrentYear();

  const outputYear =
    year == undefined || typeof year === 'number'
      ? (year ?? currentYear)
      : year
        ? currentYear
        : undefined;

  const copyrightLabel = `${owner ?? ''}${owner && outputYear ? ' - ' : ''}${outputYear ?? ''}`;

  return <div className="ownership-label">{copyrightLabel}</div>;
};

export default OwnershipLabel;
