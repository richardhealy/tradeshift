/**
 * Function to check if triangle is valid.
 *
 * @param {number} a - side A number
 * @param {number} b - side B number
 * @param {number} c - side C number
 * @return {boolean} true / false if valid
 *
 * @example
 *
 * isValidTriangle(3,4,5)
 */
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

/**
 * Function to get triangle type.
 *
 * @param {number} a - side A number
 * @param {number} b - side B number
 * @param {number} c - side C number
 * @return {string} type of triangle scalene|equilateral|isosceles
 *
 * @example
 *
 * getTriangleType(3,4,5)
 */
const getTriangleType = (a, b, c) => {

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