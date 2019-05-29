const { 
	isValidTriangle,
	getTriangleType,
} = require('./triangle')

describe('isValidTriangle', () => {
	
	test('should return true if 4, 3 and 5', () => {

		expect(isValidTriangle(4, 3, 5)).toEqual(true)
		expect(isValidTriangle(3, 5, 4)).toEqual(true)
		expect(isValidTriangle(5, 4, 3)).toEqual(true)

	})

	test('should return false if a = 2, b = 3 and c = 4', () => {

		expect(isValidTriangle(2, 3, 4)).toEqual(false)

	})

	test('should deal with extreme numbers correctly', () => {

		expect(isValidTriangle(
			7, 7, 9.89949493661
		)).toEqual(true)

		expect(isValidTriangle(
			999999,
			999999, 
			1414212.1481595326
		)).toEqual(true)

		expect(isValidTriangle(
			123456.9945,
			123456.9945, 
			174594.5559917206
		)).toEqual(true)
	})

	test('should inputs are strings but pure numbers', () => {

		expect(isValidTriangle('4', '3', '5')).toEqual(true)

	})

	test('should return false for non-number inputs', () => {

		expect(isValidTriangle(
			'asdasd',
			'999999', 
			'asd.1481595326'
		)).toEqual(false)
	})

})

describe('getTriangleType', () => {

	test('if all inputs are equal, expect "equilateral"', () => {

		expect(getTriangleType(5, 5, 5)).toEqual("equilateral")
	})

	test('if to side are equal, expect "isosceles"', () => {

		expect(getTriangleType(7, 7, 9.89949493661)).toEqual("isosceles")
		expect(getTriangleType(7, 9.89949493661, 7)).toEqual("isosceles")
		expect(getTriangleType(9.89949493661, 7, 7)).toEqual("isosceles")

	})



	test('if all inputs are equal, expect "scalene"', () => {

		expect(getTriangleType(4, 3, 5)).toEqual("scalene")
	})

})
