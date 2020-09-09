"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = require("tslib");

var react_1 = tslib_1.__importStar(require("react"));

var BasicButton_1 = tslib_1.__importDefault(require("../../components/BasicButton"));

function DisplayLocation() {
  var handleClick = react_1.useCallback(function () {
    alert(window.location.href);
  }, []);
  return react_1.default.createElement(BasicButton_1.default, {
    onClick: handleClick
  }, "\u663E\u793Alocation.href");
}

exports.default = DisplayLocation;
;
DisplayLocation.defaultProps = {};