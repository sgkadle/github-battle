import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class App extends React.Component{
	render() {
		return (
			<div>
				I am building Github Battle App in React!
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)