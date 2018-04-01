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

		if (!numbers.hasOwnProperty(numString)) {
			splitIntoThreeDigits(num, numString)
		}

		// if (numString.length === 2) {
		// 	word = createTens(digits, numString, num)
		// }  else if (numString.length === 3) {
		// 	word = createHundreds(digits, numString, num)
		// } else if (numString.length === 4) {
		// 	word = createThousands(digits, numString, num)
		// }

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

	const splitIntoThreeDigits = (num) => {
		let numStr = num.toString()
		let digitGroups = []

		if (numStr.length >= 3) {
			let counter = numStr.length

			// REGEX
			// digitGroups = numStr.split( /(?=(?:...)*$)/ )

			while (counter > 0) {
				counter -= 3
				digitGroups.unshift(numStr.slice(counter))
				numStr = numStr.slice(0, counter)
				if (numStr.length === 2) {
					digitGroups.unshift(numStr)
					break
				}
			}
		} else {
			digitGroups.push(numStr)
		}

		return digitGroups
	}

	// const createTens = (digits, numString, num) => {
	// 	let word = ''

	// 	if (numbers.hasOwnProperty(numString)) {
	// 		word = numbers[num]
	// 	} else {
	// 		const firstPart = parseInt(`${digits[0]}0`)
	// 		const secondPart = parseInt(digits[1])
	// 		word = `${numbers[firstPart]}-${numbers[secondPart]}`
	// 	}
	// 	return word
	// }

	// const createHundreds = (digits, numString, num) => {
	// 	let word = ''
	// 	const firstPart = `${numbers[parseInt(digits[0])]} hundred`

	// 	if (num % 100 === 0) {
	// 		word = firstPart
	// 	} else if (digits[1] === '0') {
	// 		word = `${firstPart} and ${numbers[parseInt(digits[2])]}`
	// 	} else {
	// 		const secondPart = createTens(digits.slice(1), numString.slice(1), parseInt(numString.slice(1)))
	// 		word = `${firstPart} and ${secondPart}`
	// 	}
	// 	return word
	// }

	// 2001 == two thousand and one
	// 2055 == two thousand and fifty-five
	// 1999 == nineteen hundred and ninety-nine
	// const createThousands = (digits, numString, num) => {
	// 	let word = ''
	// 	let firstPart = ''
	// 	let secondPart = ''
	// 	let number = numbers[parseInt(digits[0])]

	// 	firstPart = `${number} thousand`

	// 	if (num % 1000 === 0) {
	// 		word = firstPart
	// 	} else if (digits[1] === '0') {
	// 		if (digits[2] === '0') {
	// 			secondPart = `and ${numbers[digits[digits.length - 1]]}`
	// 			word = `${firstPart} ${secondPart}`
	// 		} else {
	// 			secondPart = createTens(digits.slice(2), numString.slice(2), parseInt(numString.slice(2)))
	// 			word = `${firstPart} and ${secondPart}`
	// 		}
	// 	} else {

	// 		let firstTwoDigits = Array.from(numString.substring(-2, 2))

	// 		number = createTens(firstTwoDigits, numString.substring(-2, 2), parseInt(numString.substring(-2, 2)))

	// 		firstPart = `${number} thousand`

	// 		if (digits[2] === '0') {
	// 			secondPart = `and ${numbers[digits[digits.length - 1]]}`
	// 			word = `${firstPart} ${secondPart}`
	// 		} else {
	// 			secondPart = createTens(digits.slice(2), numString.slice(2), parseInt(numString.slice(2)))
	// 			word = `${firstPart} and ${secondPart}`
	// 		}
	// 	}

	// 	console.log(word)
	// 	return word
	// }

	return {
		getWord,
		checkDecimal,
		splitIntoThreeDigits,
		setSign
	}
})()

export default NumberToStringConverter
