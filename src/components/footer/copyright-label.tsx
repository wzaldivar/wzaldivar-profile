import { FunctionComponent, useEffect, useState } from 'react';

import { useCurrentYear } from './hooks/use-current-year';

export interface CopyrightLabelProps {
  copyrightOwner: string;
}

export const CopyrightLabel: FunctionComponent<CopyrightLabelProps> = (
  props,
) => {
  const { copyrightOwner } = props;

  const currentYear = useCurrentYear();

  const copyrightLabel = `${copyrightOwner} © ${
    currentYear != null ? currentYear : ''
  }`;

  return <div className="copyright-label">{copyrightLabel}</div>;
};
