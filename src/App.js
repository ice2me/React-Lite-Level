import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Rate from './Components/Main/Rate/Rate'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './Components/Header/About/About'



class App extends React.Component {
	render() {
		return (
			<div >
				<Header />
				<Router>
					<Switch>
						<Route exact path='/' component={Rate} />
						<Route exact path='/about' component={About} />
					</Switch>
				</Router>
				<Footer />
			</div>
		)
	}
}

export default App
