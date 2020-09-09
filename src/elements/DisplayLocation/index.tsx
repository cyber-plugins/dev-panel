import React, { useCallback } from "react";
import BasicButton from "../../components/BasicButton";


export default function DisplayLocation() {
  const handleClick = useCallback(() => {
    alert(window.location.href)
  }, []);
  return (
    <BasicButton onClick={handleClick}>
      显示location.href
    </BasicButton>)
};


DisplayLocation.defaultProps = {


};