'use strict'

import test from 'tape'
import NumberToStringConverter from './converter.js'

test('A passing test', (t) => {
	t.pass('This test will pass.')
	t.end()
})

test('Test for one digit number and decimals', (t) => {
	t.plan(6)
	t.equal(NumberToStringConverter.getWord(1), 'one'),
	t.equal(NumberToStringConverter.getWord(0), 'zero')

	t.equal(NumberToStringConverter.getWord(-5), 'minus five')

	t.equal(NumberToStringConverter.getWord(6.7), 'six point seven')
	t.equal(NumberToStringConverter.getWord(5.723), 'five point seven two three')

	t.equal(NumberToStringConverter.getWord(-2.3), 'minus two point three')
	t.end()
})

test('Test setSign function', (t) => {
	t.equal(NumberToStringConverter.setSign(-5), 'minus ')
	t.equal(NumberToStringConverter.setSign(5), '')
	t.end()
})

test('Test checkDecimal function', (t) => {
	t.equal(NumberToStringConverter.checkDecimal(9), '')
	t.equal(NumberToStringConverter.checkDecimal(9.123), ' point one two three')
	t.end()
})

test('Test for two digit number', (t) => {
	t.equal(NumberToStringConverter.getWord(21), 'twenty-one')
	t.equal(NumberToStringConverter.getWord(99), 'ninety-nine')
	t.equal(NumberToStringConverter.getWord(-55), 'minus fifty-five')
	t.end()
})

test('Test for three digit number', (t) => {
	t.equal(NumberToStringConverter.getWord(100), 'hundred')
	t.equal(NumberToStringConverter.getWord(109), 'one hundred and nine')
	t.equal(NumberToStringConverter.getWord(222), 'two hundred and twenty-two')
	t.end()
})
