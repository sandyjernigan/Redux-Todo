import React from 'react';
import ThisComponent from './ThisComponent'

// This is the base react app to display components

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<ThisComponent />
			</div>
		)
	}
}

export default App
