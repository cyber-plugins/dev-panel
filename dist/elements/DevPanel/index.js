"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = require("tslib");

var react_1 = tslib_1.__importStar(require("react"));

var style_1 = tslib_1.__importDefault(require("./style"));

function DevPlanel(props) {
  var children = props.children;

  var _a = react_1.useState(false),
      show = _a[0],
      setShow = _a[1];

  var showhideClassName = react_1.useMemo(function () {
    if (show) {
      return Object.assign({}, style_1.default.showhide, style_1.default.hide);
    }

    return Object.assign({}, style_1.default.showhide, style_1.default.show);
  }, [show]);
  var handleClick = react_1.useCallback(function () {
    setShow(!show);
  }, [show]);
  return react_1.default.createElement("div", {
    style: {
      right: "5%",
      bottom: "5%",
      position: "fixed"
    }
  }, react_1.default.createElement("div", {
    style: showhideClassName,
    onClick: handleClick
  }, show ? "关闭面板" : "打开面板"), react_1.default.createElement("div", null, show ? children : null));
}

exports.default = DevPlanel;
;
DevPlanel.defaultProps = {};