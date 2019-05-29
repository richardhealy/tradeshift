const isValidTriangle = (a, b, c) => {

	if(
		isNaN(a) ||
		isNaN(b) ||
		isNaN(c)
	) {
		// Depending on requirements we could return
		// false, warning or throw error
		return false
	}


	return ((a + b > c) && (a + c > b) && (b + c > a))

}

const getTriangleType = (a, b, c, atLeastTwo) => {

	if(
		isNaN(a) ||
		isNaN(b) ||
		isNaN(c)
	) {
		// Depending on requirements we could return
		// false, warning or throw error
		return false
	}

	let type = 'scalene'

	const ab = a === b
	const bc = b === c
	const ca = c === a

	// All sides equal
	if (ab && bc && ca) {

		type = 'equilateral'

	// Two sides side equal
	} else if(ab || bc || ca) {

		type = 'isosceles'

	}

	return type
}

module.exports = {
	isValidTriangle,
	getTriangleType,
}