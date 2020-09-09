import React, { useState, useMemo, useCallback } from "react";
import classnames from "classnames";
import css from "./style.less";



export default function DevPlanel(props: any) {
  const { children } = props;

  const [show, setShow] = useState(false);

  const showhideClassName = useMemo(() => classnames(css.showhide, {
    [css.show]: !show,
    [css.hide]: show
  }), [show]);

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);


  return (
    <div className={css.planel}>
      <div className={showhideClassName} onClick={handleClick}>
        {show ? "关闭面板" : "打开面板"}
      </div>
      <div>{show ? children : null}</div>
    </div>)
};


DevPlanel.defaultProps = {

};