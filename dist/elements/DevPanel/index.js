"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = require("tslib");

var react_1 = tslib_1.__importStar(require("react"));

var classnames_1 = tslib_1.__importDefault(require("classnames"));

require("./style.less");

var style_less_1 = tslib_1.__importDefault({
  "planel": "style__planel___474e2bc0",
  "showhide": "style__showhide___d467fe94",
  "show": "style__show___af6d14c3",
  "hide": "style__hide___19d50eb5"
});

function DevPlanel(props) {
  var children = props.children;

  var _a = react_1.useState(false),
      show = _a[0],
      setShow = _a[1];

  var showhideClassName = react_1.useMemo(function () {
    var _a;

    return classnames_1.default(style_less_1.default.showhide, (_a = {}, _a[style_less_1.default.show] = !show, _a[style_less_1.default.hide] = show, _a));
  }, [show]);
  var handleClick = react_1.useCallback(function () {
    setShow(!show);
  }, [show]);
  return react_1.default.createElement("div", {
    className: style_less_1.default.planel
  }, react_1.default.createElement("div", {
    className: showhideClassName,
    onClick: handleClick
  }, show ? "关闭面板" : "打开面板"), react_1.default.createElement("div", null, show ? children : null));
}

exports.default = DevPlanel;
;
DevPlanel.defaultProps = {};