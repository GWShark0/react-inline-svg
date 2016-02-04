"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = multiplier;

var _lodash = require("lodash.isnumber");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function multiplier(size) {
	switch (size) {
		case "mega":
			return 2;
		case "more-mega":
			return 4;
		case "really-more-mega":
			return 8;
		default:
			return (0, _lodash2.default)(size) ? size : 1;
	}
}