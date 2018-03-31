'use strict'

import UIController from './view.js'
import NumberToStringConverter from './converter.js'

const App = function (numToStrCtrl, UICtrl) {

	const init = () => {
		console.info('start')
		setupEventListener()
	}

	const setupEventListener = () => {
		const DOM = UICtrl.DOMStrings

		document.querySelector(DOM.btn).addEventListener('click', convertNumber)

		document.addEventListener('keypress', (event) => {
			if (event.keyCode === 13 || event.which === 13) {
				convertNumber()
			}
		})
	}


	const convertNumber = () => {
		// 1. get the number
		const input = UICtrl.getInput()
		console.log(input)

		// 2. convert the number

		// 3. display the number
	}

	return {
		init
	}
}

App(NumberToStringConverter, UIController).init()
