'use strict'

import test from 'tape'
import NumberToStringConverter from './converter.js'

test('A passing test', (t) => {
	t.pass('This test will pass.')
	t.end()
})

test('Test for one digit number', (t) => {
	t.equal(NumberToStringConverter.getWord(1), 'one')
	t.end()
})
