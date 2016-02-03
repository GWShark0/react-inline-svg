import isNumber from 'lodash.isnumber';

export default function multiplier(size) {
	switch (size) {
		case "mega":
			return 2;
		case "more-mega":
			return 4;
		case "really-more-mega":
			return 8;
		default:
			return isNumber(size) ? size : 1;
	}
}
