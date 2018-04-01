'use strict'

import test from 'tape'
import NumberToStringConverter from './converter.js'

test('A passing test', (t) => {
	t.pass('This test will pass.')
	t.end()
})

test('Test for one digit number and decimals', (t) => {
	t.plan(6)
	t.equal(NumberToStringConverter.getWord(0), 'zero')
	t.equal(NumberToStringConverter.getWord(1), 'one'),

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

test('Test for splitting the number into smaller arrays', (t) => {
	t.deepEqual(NumberToStringConverter.splitIntoThreeDigits(11), ['11']),
	t.deepEqual(NumberToStringConverter.splitIntoThreeDigits(111), ['111']),
	t.deepEqual(NumberToStringConverter.splitIntoThreeDigits(1222), ['1', '222']),
	t.deepEqual(NumberToStringConverter.splitIntoThreeDigits(11222), ['11', '222']),
	t.deepEqual(NumberToStringConverter.splitIntoThreeDigits(111222), ['111', '222']),
	t.deepEqual(NumberToStringConverter.splitIntoThreeDigits(1222333), ['1', '222', '333']),
	t.end()
})

test('Test for two digit number', (t) => {
	t.equal(NumberToStringConverter.getWord(21), 'twenty-one')
	t.equal(NumberToStringConverter.getWord(99), 'ninety-nine')
	t.equal(NumberToStringConverter.getWord(-55), 'minus fifty-five')
	t.end()
})

test('Test for three digit number', (t) => {
	t.equal(NumberToStringConverter.getWord(100), 'one hundred')
	t.equal(NumberToStringConverter.getWord(109), 'one hundred and nine')
	t.equal(NumberToStringConverter.getWord(111), 'one hundred and eleven')
	t.equal(NumberToStringConverter.getWord(222), 'two hundred and twenty-two')
	t.equal(NumberToStringConverter.getWord(200), 'two hundred')
	t.end()
})

test('Test for four digit number', (t) => {
	t.equal(NumberToStringConverter.getWord(2000), 'two thousand')
	t.equal(NumberToStringConverter.getWord(2001), 'two thousand and one')
	t.equal(NumberToStringConverter.getWord(2011), 'two thousand and eleven')
	t.equal(NumberToStringConverter.getWord(2055), 'two thousand and fifty-five')
	t.equal(NumberToStringConverter.getWord(2202), 'two thousand two hundred and two')
	t.equal(NumberToStringConverter.getWord(2211), 'two thousand two hundred and eleven')
	t.equal(NumberToStringConverter.getWord(2222), 'two thousand two hundred and twenty-two')
	t.end()
})
