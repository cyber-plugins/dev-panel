"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = require("tslib");

var react_1 = tslib_1.__importStar(require("react"));

var classnames_1 = tslib_1.__importDefault(require("classnames"));

require("./style.less");

var style_less_1 = tslib_1.__importDefault({
  "basic_button": "style__basic_button___4b3ac4f4"
});

function BasicButton(props) {
  var className = props.className,
      children = props.children,
      otherProps = tslib_1.__rest(props, ["className", "children"]);

  var computedClassName = react_1.useMemo(function () {
    return classnames_1.default(style_less_1.default.basic_button, className);
  }, [className]);
  return react_1.default.createElement("div", tslib_1.__assign({
    className: computedClassName
  }, otherProps), children);
}

exports.default = BasicButton;
;
BasicButton.defaultProps = {};