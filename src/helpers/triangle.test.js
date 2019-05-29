const { 
	isValidTriangle,
	getTriangleType,
} = require('./triangle')

describe('isValidTriangle', () => {
	
	test('should return true if a = 4, b = 3 and c = 5', () => {

		expect(isValidTriangle(4, 3, 5)).toEqual(true)

	})

	test('should return false if a = 2, b = 3 and c = 4', () => {

		expect(isValidTriangle(2, 3, 4)).toEqual(false)

	})

	test('should deal with extreme numbers', () => {

		expect(isValidTriangle(
			1231210111.123123122,
			2312324123.123123122, 
			1231232131232132132132132131100000000000000000000000000000000000000000000000000000000
			)).toEqual(true)

	})
})
