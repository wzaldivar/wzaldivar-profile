import { FunctionComponent, useEffect, useState } from "react";

export const CopyrightLabel: FunctionComponent = () => {
  const [currentYear, setCurrentYear] = useState<number>();
  const copyrightLabel = `Walber Zaldivar © ${currentYear ? currentYear : ""}`;

  useEffect(() => {
    const getNewYear = () => new Date().getFullYear();

    if (currentYear == undefined) {
      setCurrentYear(getNewYear());
    }

    const timer = setInterval(() => {
      const newYear = getNewYear();
      if (newYear != currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentYear]);

  return <div className="copyright-label">{copyrightLabel}</div>;
};
