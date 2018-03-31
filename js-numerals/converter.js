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
		const num = Math.floor(Math.abs(number))
		const numString = num.toString()
		const digits = Array.from(numString)
		const sign = setSign(number)
		const fraction = checkDecimal(number)

		let phrase = ''
		let word = numbers[num]

		if (numString.length === 2 && !numbers.hasOwnProperty(numString)) {
			word = createTwoDigitNumber(digits)
		}  else if (numString.length === 3 && !numbers.hasOwnProperty(numString)) {
			word = createThreeDigitNumber(digits)
		}

		phrase = `${sign}${word}${fraction}`

		console.log(phrase)
		return phrase

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
			const fraction = number.toString().split('.')[1]
			fractionWord = ' point'
			Array.from(fraction).forEach(el => fractionWord += ` ${numbers[parseInt(el)]}`)
		}
		return fractionWord
	}

	const createTwoDigitNumber = (digits) => {
		const firstPart = parseInt(`${digits[0]}0`)
		const secondPart = parseInt(digits[1])
		return `${numbers[firstPart]}-${numbers[secondPart]}`
	}

	const createThreeDigitNumber = (digits) => {
		let word = ''
		const firstPart = `${numbers[parseInt(digits[0])]} hundred`
		if (digits[1] === '0') {
			word = `${firstPart} and ${numbers[parseInt(digits[2])]}`
		} else {
			const secondPart = createTwoDigitNumber(digits.slice(1))
			word = `${firstPart} and ${secondPart}`
		}
		return word
	}

	return {
		getWord,
		checkDecimal,
		setSign
	}
})()

export default NumberToStringConverter
