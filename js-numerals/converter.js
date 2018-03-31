'use strict'

const NumberToStringConverter = (function () {
	console.info('converter')

	const numbers = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'ninteen',
		20: 'twenty',
		30: 'thirty',
		40: 'fourty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'hundred',
		1000: 'thousand',
		1000000: 'million'
	}

	const getWord = (number) => {
		let word = ''
		let num = Math.floor(Math.abs(number))
		let numString = num.toString()
		let sign = setSign(number)
		let fraction = checkDecimal(number)

		if (numString.length === 2 && !numbers.hasOwnProperty(numString)) {
			word = createTwoDigitNumber(numString)
			word = `${sign}${word}${fraction}`
		} else {
			word = `${sign}${numbers[num]}${fraction}`
		}

		// console.log(`${sign}${numbers[num]}${fraction}`)
		console.log(word)
		return word

	}

	const setSign = (number) => {
		let sign = ''
		if (number < 0) {
			sign = 'minus '
		}
		return sign
	}

	const checkDecimal = (number) => {
		let fractionWord = ''
		if (number % 1 !== 0) {
			let fraction = number.toString().split('.')[1]
			fractionWord = ' point'
			Array.from(fraction).forEach(el => fractionWord += ` ${numbers[parseInt(el)]}`)
		}
		return fractionWord
	}

	const createTwoDigitNumber = (numString) => {
		let digits = Array.from(numString)
		let firstDigit = parseInt(`${digits[0]}0`)
		let secondDigit = parseInt(digits[1])
		return `${numbers[firstDigit]}-${numbers[secondDigit]}`
	}

	return {
		getWord,
		checkDecimal,
		setSign
	}
})()

export default NumberToStringConverter
