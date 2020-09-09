import React, { useCallback } from "react";
import BasicButton from "../../components/BasicButton";
import css from "./style.less";

export default function ReloadButton() {
  const handleClick = useCallback(() => {
    window.location.reload()
  }, []);
  return (
    <BasicButton className={css.reload} onClick={handleClick}>
      刷新网页
    </BasicButton>)
};


ReloadButton.defaultProps = {


};