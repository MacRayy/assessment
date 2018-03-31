'use strict'

import test from 'tape'
import NumberToStringConverter from './converter.js'

test('A passing test', (t) => {
	t.pass('This test will pass.')
	t.end()
})

test('Test for one digit number and decimals', (t) => {
	t.equal(NumberToStringConverter.getWord(1), 'one'),
	t.equal(NumberToStringConverter.getWord(0), 'zero')
	t.equal(NumberToStringConverter.getWord(-5), 'minus five')
	t.equal(NumberToStringConverter.getWord(6.7), 'six point seven')
	t.equal(NumberToStringConverter.getWord(5.723), 'five point seven two three')
	t.equal(NumberToStringConverter.getWord(-2.3), 'minus two point three')
	t.end()
})
