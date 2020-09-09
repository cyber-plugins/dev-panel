"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = require("tslib");

var react_1 = tslib_1.__importDefault(require("react"));

var react_dom_1 = tslib_1.__importDefault(require("react-dom"));

var DevPanel_1 = tslib_1.__importDefault(require("./elements/DevPanel"));

var ReloadButton_1 = tslib_1.__importDefault(require("./elements/ReloadButton"));

var DisplayLocation_1 = tslib_1.__importDefault(require("./elements/DisplayLocation"));

function renderDevPlanel() {
  var renderTarget = document.createElement("div");
  document.body.appendChild(renderTarget);
  react_dom_1.default.render(react_1.default.createElement(DevPanel_1.default, null, react_1.default.createElement(ReloadButton_1.default, null), react_1.default.createElement(DisplayLocation_1.default, null)), renderTarget);
}

exports.default = renderDevPlanel;
;