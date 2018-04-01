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
		90: 'ninety'
	}

	const scale = ['hundred', 'thousand', 'million', 'billion']

	const getWord = (number) => {
		const num = Math.floor(Math.abs(number))
		const numString = num.toString()
		const sign = setSign(number)
		const fraction = checkDecimal(number)

		let phrase = ''
		let word = numbers[num]

		if (!numbers.hasOwnProperty(numString)) {
			const digitGroups = splitIntoThreeDigits(num)

			let wordArray = digitGroups.map(el => createHundreds(parseInt(el)))
			console.log(wordArray)

			let wordArrayWithScale = wordArray.reverse().map((el, index) => {
				console.log(parseInt(digitGroups[index]))
				console.log(el);
				if (el !== '') {
					return addScale(el, index)
				}
			})

			if (num % 1000 === 0 && wordArrayWithScale.length > 2) {
				console.log(wordArrayWithScale.reverse());
				word = wordArrayWithScale.reverse().slice(0, 2).join(' ')
			} else {
				word = wordArrayWithScale.reverse().join(' ')
			}
		}

		phrase = `${sign}${word.trim()}${fraction}`

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
		const digitGroups = []

		let numStr = num.toString()

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

	const createHundreds = (num) => {
		const hundreds = Math.floor(num / 100)
		const tens = num % 100

		let hundredText = ''

		// console.log(hundreds, ' - ', tens)

		if (hundreds !== 0) {
			hundredText = `${numbers[hundreds]} hundred`

			if (tens !== 0) {
				hundredText += ' and '
			}
		}
		// console.log(tens);
		hundredText += createTens(tens)

		// console.log(hundredText);
		return hundredText
	}

	const createTens = (num) => {
		const tens = Math.floor(num / 10)
		const unit = num % 10

		let tensText = ''

		// console.log(tens, ' - ', unit)

		if (tens > 1) {
			tensText = numbers[tens * 10]

			if (unit !== 0) {
				tensText += `-${numbers[unit]}`
			}
		} else if (num !== 0) {
			tensText = numbers[num]
		}

		// console.log(tensText)
		return tensText
	}

	const addScale = (text, position) => {
		let textWithScale = text

		if (position !== 0) {
			textWithScale += ` ${scale[position]}`
		}

		return textWithScale
	}

	return {
		getWord,
		checkDecimal,
		splitIntoThreeDigits,
		setSign
	}
})()

export default NumberToStringConverter
