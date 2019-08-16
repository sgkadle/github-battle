import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Poplular from './components/Popular'

class App extends React.Component{
	render() {
		return (
			<div className='container'>
				<Poplular />
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
)