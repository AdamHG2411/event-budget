import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Event from './Event.js';
import './Events.css';

class Events extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		console.log('Events: render');
		let eventCards = this.props.events.map((event, i) => {
			return <Event {...this.props.events[i]} key={i} fetchEvents={this.props.fetchEvents} />;
		});
		return (
			<div className="Events">
				<div className="Events-Intro">
					<h2 className="Events-IntroHeader">Budget with a goal in mind</h2>
					<p className="mission">
						At TRACKiT, we believe that anyone can save money! Stay motivated by connecting your savings to
						your goals in life! Track your spending and budget with ease. Add a new goal by answering a few
						simple questions, then check back here to monitor your progress!
					</p>
					<Link to="/add-event">
						<button className="Events-AddEvent">Add Event</button>
					</Link>
				</div>
				{eventCards}
			</div>
		);
	}
}

export default Events;
