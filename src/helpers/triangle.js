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

	// get the longest side
	const [newA, newB, newC] = [a,b,c].sort((a,b) => a - b)

	const aSquared = newA*newA
	const bSquared = newB*newB
	const cSquared = newC*newC

	// Due to floats being IEEE 64 bit values, Javascript has 
	// floating rounding issues. For use to compare floats,
	// we have to round the comparisons
	const compareLeft = (aSquared + bSquared).toFixed(0)
	const compareRight = cSquared.toFixed(0)

	return (compareLeft === compareRight) ? true : false

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