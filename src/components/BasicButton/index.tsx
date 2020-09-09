import React, { useMemo } from "react";
import classNames from "classnames";
import css from "./style.less";

export default function BasicButton(props: any) {
  const { className, children, ...otherProps } = props;
  const computedClassName = useMemo(() => classNames(css.basic_button, className), [className]);
  return (
    <div className={computedClassName} {...otherProps}>
      {children}
    </div>)
};


BasicButton.defaultProps = {


};