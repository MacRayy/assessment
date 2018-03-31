'use strict'

const UIController = (function () {
	console.info('UI')

	const DOMStrings = {
		btn: '.btn',
		inputValue: '.form__input'
	}

	const getInput = () => parseFloat(document.querySelector(DOMStrings.inputValue).value)

	return {
		DOMStrings,
		getInput
	}
})()

export default UIController
