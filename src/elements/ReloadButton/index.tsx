import React, { useCallback } from "react";
import BasicButton from "../../components/BasicButton";

export default function ReloadButton() {
  const handleClick = useCallback(() => {
    window.location.reload()
  }, []);
  return (
    <BasicButton onClick={handleClick}>
      刷新网页
    </BasicButton>)
};


ReloadButton.defaultProps = {


};