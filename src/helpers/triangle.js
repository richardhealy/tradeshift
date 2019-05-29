const BigNumber = require('bignumber.js').default;

const isValidTriangle = (a, b, c) => {

	const aSquared = new BigNumber(a).exponentiatedBy(2)
	const bSquared = new BigNumber(b).exponentiatedBy(2)
	const cSquared = new BigNumber(c).exponentiatedBy(2)

	return aSquared.plus(bSquared).isEqualTo(cSquared) ? true : false

}

const getTriangleType = (a, b, c) => {

	let type = 'isosceles'

	if(a === b && b === c) {

		type = 'equilateral'

	} else if (a === b || b === c || c === a) {

		type = 'isosceles'
	}

	return type
}

module.exports = {
	isValidTriangle,
	getTriangleType,
}