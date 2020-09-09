import React, { useMemo } from "react";
import css from "./style";

export default function BasicButton(props: any) {
  const { style, children, ...otherProps } = props;
  const computedClassName = useMemo(() => ({ ...css.basic_button, ...style }), [style]);
  return (
    <div style={computedClassName} {...otherProps}>
      {children}
    </div>)
};


BasicButton.defaultProps = {


};