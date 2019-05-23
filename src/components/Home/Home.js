import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../Home/Home.css';
import EventCost from '../EventCost/EventCost';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			trip: ''
		};
	}

	render() {
		console.log('Home: render');
		// console.log(placeholder)

		return (
			<div className="container">
				<Switch>
					<Route exact path="/" render={(routerProps) => <AddEvent {...this.state} {...routerProps} />} />
					<Route exact path="/event-cost" render={(routerProps) => <EventCost {...this.state} />} />
					<Route exact path="/expenses" render={(routerProps) => <Expenses {...this.state} />} />
				</Switch>
			</div>
		);
	}
}

export default Home;
