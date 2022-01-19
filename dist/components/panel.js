"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Panel = _ref => {
  let {
    title,
    content,
    children,
    onCancel,
    onSubmit
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, title && /*#__PURE__*/_react.default.createElement("h2", null, title), content && /*#__PURE__*/_react.default.createElement("p", null, content), children, onCancel && /*#__PURE__*/_react.default.createElement("button", {
    onClick: onCancel
  }, "Cancel"), onSubmit && /*#__PURE__*/_react.default.createElement("button", {
    onClick: onSubmit
  }, "Submit"));
};

var _default = Panel;
exports.default = _default;