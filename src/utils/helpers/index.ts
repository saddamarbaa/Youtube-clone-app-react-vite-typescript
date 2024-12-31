export const kFormatter = (num: number | string) => {
	const parsedNum = typeof num === 'number' ? num : parseFloat(num)

	if (isNaN(parsedNum)) {
		throw new Error('Invalid number input')
	}

	if (Math.abs(parsedNum) > 999999) {
		return (
			Math.sign(parsedNum) *
				Number((Math.abs(parsedNum) / 1000000).toFixed(1)) +
			'M'
		)
	} else if (Math.abs(parsedNum) > 999) {
		return (
			Math.sign(parsedNum) * Number((Math.abs(parsedNum) / 1000).toFixed(1)) +
			'k'
		)
	} else {
		return Math.sign(parsedNum) * Math.abs(parsedNum)
	}
}
