import React from "react";
import ReactDOM from "react-dom";

import DevPlanel from "./elements/DevPanel";
import RealodButton from "./elements/ReloadButton";
import DisplayLocation from "./elements/DisplayLocation";

export default function renderDevPlanel() {
  const renderTarget = document.createElement("div");
  document.body.appendChild(renderTarget);
  ReactDOM.render((
    <DevPlanel>
      <RealodButton />
      <DisplayLocation />
    </DevPlanel>
  ), renderTarget);
};

