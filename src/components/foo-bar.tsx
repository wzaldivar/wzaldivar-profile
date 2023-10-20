import React, { FunctionComponent } from "react";

import Image, { ImageProps } from "next/image";

type FooBarProps = React.ComponentProps<typeof Image>;

const FooBar: FunctionComponent<FooBarProps> = (props) => {
  const { alt = "", ...otherProps } = props;
  return (
    <>
      <Image alt={alt} {...otherProps} />
    </>
  );
};
