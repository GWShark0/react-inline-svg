import classNames from 'classnames';
import React from 'react';
import multiplier from './multiplier';

export default function SVG(props) {

	const {
		width = 0,
		height = 0,
		paths = [],
		size = 1,
		color,
		style,
		...other
	} = props;

	const x = multiplier(size);

	const inline = Object.assign({
		width: width * x,
		height: height * x,
		minWidth: width * x,
		minHeight: height * x
	}, style);

	const viewBox = (`0 0 ${width} ${height}`);

	return (
		<svg
			style={inline}
			role={'img'}
			viewBox={viewBox}
			fill={color}
			{...other}
		>
			{[].concat(paths).map((data, key) => <path d={data} key={key} />)}
		</svg>
	);
}
