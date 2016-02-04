'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = SVG;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _multiplier = require('./multiplier');

var _multiplier2 = _interopRequireDefault(_multiplier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function SVG(props) {
	var _props$width = props.width;
	var width = _props$width === undefined ? 0 : _props$width;
	var _props$height = props.height;
	var height = _props$height === undefined ? 0 : _props$height;
	var _props$paths = props.paths;
	var paths = _props$paths === undefined ? [] : _props$paths;
	var _props$size = props.size;
	var size = _props$size === undefined ? 1 : _props$size;
	var color = props.color;
	var style = props.style;

	var other = _objectWithoutProperties(props, ['width', 'height', 'paths', 'size', 'color', 'style']);

	var x = (0, _multiplier2.default)(size);

	var inline = Object.assign({
		width: width * x,
		height: height * x,
		minWidth: width * x,
		minHeight: height * x
	}, style);

	var viewBox = '0 0 ' + width + ' ' + height;

	return _react2.default.createElement(
		'svg',
		_extends({
			style: inline,
			role: 'img',
			viewBox: viewBox,
			fill: color
		}, other),
		[].concat(paths).map(function (data, key) {
			return _react2.default.createElement('path', { d: data, key: key });
		})
	);
}