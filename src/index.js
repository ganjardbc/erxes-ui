import React from 'react'
import ReactDOM from 'react-dom'

import './assets/icons/fontawesome/css/all.min.css'
import './assets/sass/app.css'
import './assets/css/circle.css'
import 'input-moment/dist/input-moment.css'
import 'react-times/css/material/default.css'
import 'react-times/css/classic/default.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
