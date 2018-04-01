'use strict'

const UIController = (function () {
	console.info('UI')

	const DOMStrings = {
		btn: '.btn',
		inputValue: '.form__input',
		outputText: '#phrase'
	}

	const getInput = () => parseFloat(document.querySelector(DOMStrings.inputValue).value)

	const displayText = (text) => {
		document.querySelector(DOMStrings.outputText).innerHTML = text
	}

	return {
		DOMStrings,
		getInput,
		displayText
	}
})()

export default UIController
