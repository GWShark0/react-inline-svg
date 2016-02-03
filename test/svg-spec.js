import {expect} from 'chai';
import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import SVGClass from '../src/svg';

const SVG = React.createFactory(SVGClass);
let shallow;

// single compound path
const CHECK_ICON = {
	width: 12,
	height: 16,
	paths: 'M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z'
};

// single compound path split into two paths
const CODE_ICON = {
	width: 14,
	height: 16,
	paths: [
		'M9.5,3L8,4.5L11.5,8L8,11.5L9.5,13L14,8L9.5,3z',
		'M4.5,3L0,8l4.5,5L6,11.5L2.5,8L6,4.5L4.5,3z'
	]
};

describe('SVG Component', () => {

	beforeEach(() => {
		shallow = createRenderer(SVG);
	});

	it('defaults', () => {

		shallow.render(SVG());
		const svg = shallow.getRenderOutput();

		expect(svg.props.children).to.be.empty;
		expect(svg.props.fill).to.be.undefined;
		expect(svg.props.role).to.equal('img');
		expect(svg.props.style).to.deep.equal({
			width: 0,
			height: 0,
			minWidth: 0,
			minHeight: 0
		});
		expect(svg.props.viewBox).to.equal('0 0 0 0');
		expect(svg.type).to.equal('svg');

	});

	it('fill color', () => {

		const props = {
			fill: '#fff'
		};

		shallow.render(SVG(props));
		const svg = shallow.getRenderOutput();

		expect(svg.props.fill).to.equal(props.fill);

	});

	it('prop passthrough', () => {

		const props = {
			width: 0,
			className: 'test',
			style: {
				background: '#fff',
				width: 1
			},
			testProp: true
		};

		shallow.render(SVG(props));
		const svg = shallow.getRenderOutput();

		expect(svg.props.className).to.equal(props.className);
		expect(svg.props.testProp).to.equal(props.testProp);
		expect(svg.props.style.background).to.equal(props.style.background);
		expect(svg.props.style.width).to.equal(props.style.width);
		expect(svg.props.viewBox).to.equal('0 0 0 0');

	});

	describe('Icon', () => {

		it('single-path', () => {

			const props = CHECK_ICON;
			const width = CHECK_ICON.width;
			const height = CHECK_ICON.height;

			shallow.render(SVG(props));
			const svg = shallow.getRenderOutput();
			const path = svg.props.children[0];

			// base svg
			expect(svg.props.children).to.have.length(1);
			expect(svg.props.fill).to.be.undefined;
			expect(svg.props.role).to.equal('img');
			expect(svg.props.style).to.deep.equal({
				width: width,
				height: height,
				minWidth: width,
				minHeight: height
			});
			expect(svg.props.viewBox).to.equal(`0 0 ${width} ${height}`);
			expect(svg.type).to.equal('svg');

			// path
			expect(path.key).to.equal('0');
			expect(path.type).to.equal('path');
			expect(path.props.d).to.equal(CHECK_ICON.paths);

		});

		it('multi-path', () => {

			const props = CODE_ICON;
			const width = CODE_ICON.width;
			const height = CODE_ICON.height;

			shallow.render(SVG(props));
			const svg = shallow.getRenderOutput();
			const paths = svg.props.children;

			// base svg
			expect(svg.props.children).to.have.length(2);
			expect(svg.props.fill).to.be.undefined;
			expect(svg.props.role).to.equal('img');
			expect(svg.props.style).to.deep.equal({
				width: width,
				height: height,
				minWidth: width,
				minHeight: height
			});
			expect(svg.props.viewBox).to.equal(`0 0 ${width} ${height}`);
			expect(svg.type).to.equal('svg');

			// paths
			paths.forEach((path, i) => {
				expect(path.key).to.equal(`${i}`);
				expect(path.type).to.equal('path');
				expect(path.props.d).to.equal(CODE_ICON.paths[i]);
			});

		});

	});

	describe('Multiplier Size', () => {

		it('default', () => {

			const props = {
				width: 1,
				height: 1
			};

			shallow.render(SVG(props));
			const svg = shallow.getRenderOutput();

			expect(svg.props.viewBox).to.equal('0 0 1 1');
			expect(svg.props.style).to.deep.equal({
				width: 1,
				height: 1,
				minWidth: 1,
				minHeight: 1
			});

		})

		it('mega', () => {

			const props = {
				width: 1,
				height: 1,
				size: 'mega'
			};

			shallow.render(SVG(props));
			const svg = shallow.getRenderOutput();

			expect(svg.props.viewBox).to.equal('0 0 1 1');
			expect(svg.props.style).to.deep.equal({
				width: 2,
				height: 2,
				minWidth: 2,
				minHeight: 2
			});

		});

		it('more-mega', () => {

			const props = {
				width: 1,
				height: 1,
				size: 'more-mega'
			};

			shallow.render(SVG(props));
			const svg = shallow.getRenderOutput();

			expect(svg.props.viewBox).to.equal('0 0 1 1');
			expect(svg.props.style).to.deep.equal({
				width: 4,
				height: 4,
				minWidth: 4,
				minHeight: 4
			});

		});

		it('really-more-mega', () => {

			const props = {
				width: 1,
				height: 1,
				size: 'really-more-mega'
			};

			shallow.render(SVG(props));
			const svg = shallow.getRenderOutput();

			expect(svg.props.viewBox).to.equal('0 0 1 1');
			expect(svg.props.style).to.deep.equal({
				width: 8,
				height: 8,
				minWidth: 8,
				minHeight: 8
			});

		});

		it('custom', () => {

			const props = {
				width: 1,
				height: 1,
				size: 3.14
			};

			shallow.render(SVG(props));
			const svg = shallow.getRenderOutput();

			expect(svg.props.viewBox).to.equal('0 0 1 1');
			expect(svg.props.style).to.deep.equal({
				width: 3.14,
				height: 3.14,
				minWidth: 3.14,
				minHeight: 3.14
			});

		});

		it('invalid', () => {

			const props = {
				width: 1,
				height: 1,
				size: 'super-duper-more-mega'
			};

			shallow.render(SVG(props));
			const svg = shallow.getRenderOutput();

			expect(svg.props.viewBox).to.equal('0 0 1 1');
			expect(svg.props.style).to.deep.equal({
				width: 1,
				height: 1,
				minWidth: 1,
				minHeight: 1
			});

		});

	});

});
