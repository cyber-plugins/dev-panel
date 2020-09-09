import React, { useCallback } from "react";
import BasicButton from "../../components/BasicButton";
import css from "./style.less";


export default function DisplayLocation() {
  const handleClick = useCallback(() => {
    alert(window.location.href)
  }, []);
  return (
    <BasicButton className={css.display} onClick={handleClick}>
      显示location.href
    </BasicButton>)
};


DisplayLocation.defaultProps = {


};