'use strict'

import UIController from './view.js'
import NumberToStringConverter from './converter.js'

const App = function (numToStrCtrl, UICtrl) {
	console.info('app has stared')
	numToStrCtrl()
	UICtrl()
}

App(NumberToStringConverter, UIController)
