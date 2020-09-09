"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = require("tslib");

var react_1 = tslib_1.__importStar(require("react"));

var BasicButton_1 = tslib_1.__importDefault(require("../../components/BasicButton"));

function ReloadButton() {
  var handleClick = react_1.useCallback(function () {
    window.location.reload();
  }, []);
  return react_1.default.createElement(BasicButton_1.default, {
    onClick: handleClick
  }, "\u5237\u65B0\u7F51\u9875");
}

exports.default = ReloadButton;
;
ReloadButton.defaultProps = {};