import { FunctionComponent, useEffect, useState } from 'react';

import { useCurrentYear } from './hooks/use-current-year';

export interface CopyrightLabelProps {
  'copyright-owner': string;
}

export const CopyrightLabel: FunctionComponent<CopyrightLabelProps> = (
  props,
) => {
  const { 'copyright-owner': copyrightOwner } = props;

  const currentYear = useCurrentYear();

  const copyrightLabel = `${copyrightOwner}${currentYear == undefined ? '' : ` - ${currentYear}`}`;

  return <div className="copyright-label">{copyrightLabel}</div>;
};
