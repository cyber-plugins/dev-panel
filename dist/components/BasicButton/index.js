"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = require("tslib");

var react_1 = tslib_1.__importStar(require("react"));

var style_1 = tslib_1.__importDefault(require("./style"));

function BasicButton(props) {
  var style = props.style,
      children = props.children,
      otherProps = tslib_1.__rest(props, ["style", "children"]);

  var computedClassName = react_1.useMemo(function () {
    return tslib_1.__assign(tslib_1.__assign({}, style_1.default.basic_button), style);
  }, [style]);
  return react_1.default.createElement("div", tslib_1.__assign({
    style: computedClassName
  }, otherProps), children);
}

exports.default = BasicButton;
;
BasicButton.defaultProps = {};