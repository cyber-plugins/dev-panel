import React, { useState, useMemo, useCallback } from "react";
import css from "./style";



export default function DevPlanel(props: any) {
  const { children } = props;

  const [show, setShow] = useState(false);

  const showhideClassName = useMemo(() => {
    if (show) {
      return Object.assign({}, css.showhide, css.hide);
    }
    return Object.assign({}, css.showhide, css.show);
  }, [show]);

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);


  return (
    <div style={{ right: "5%", bottom: "5%", position: "fixed" }}>
      <div style={showhideClassName} onClick={handleClick}>
        {show ? "关闭面板" : "打开面板"}
      </div>
      <div>{show ? children : null}</div>
    </div>)
};


DevPlanel.defaultProps = {

};