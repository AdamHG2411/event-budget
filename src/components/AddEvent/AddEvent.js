import React, { Component } from 'react';
import axios from 'axios';
import EventCost from '../EventCost/EventCost.js';
import './AddEvent.css';

let placeholder = [
	'Take me to Greece!',
	'Road trip to Mount Rushmore',
	'Honeymoon in Hawaii',
	'Bermuda, Bahama, come on pretty mama'
];

class AddEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trip: '',
			startDate: '',
			endDate: '',
			submitted: false,
			eventId: ''
		};
		this.handleChange = this.handleChange.bind(this);
		// this.eventDetails = this.eventDetails.bind(this);
		this.handleEventDetails = this.handleEventDetails.bind(this);
	}

	handleChange(event) {
		console.log('AddEvent: handleChange');
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleEventDetails(event) {
		console.log('AddEvent: handleEventDetails');
		event.preventDefault();
		let newEvent = {
			name: this.state.name,
			dates: {
				start: this.state.startDate,
				end: this.state.endDate
			}
		};
		console.log(newEvent);
		axios.post(`http://event-budget-api.herokuapp.com/api/${this.props.userId}/events`, newEvent).then((posted) => {
			console.log(posted.data._id);
			this.setState({ eventId: posted.data._id, submitted: true, event: newEvent });
		});
		// Reference:  https://stackoverflow.com/questions/28907965/how-do-i-add-a-component-after-an-submit-event-using-reactjs
	}

	componentDidMount() {
		console.log('AddEvent: componentDidMount');
		var x = Math.floor(Math.random() * placeholder.length);
		let placeholderVal = placeholder[x];
		console.log(placeholderVal);
		this.setState({
			placeholder: placeholderVal
		});
	}

	render() {
		console.log('AddEvent: render');
		if (this.state.submitted === true) {
			return <EventCost userId={this.props.userId} eventId={this.state.eventId} />;
		} else {
			return (
				<div className="content">
					<h1>Where do you want to go?</h1>
					<h1>What do you want to do?</h1>
					<form onSubmit={this.handleEventDetails}>
						<input
							type="text"
							name="name"
							placeholder={this.state.placeholder}
							onChange={this.handleChange}
						/>
						<div>
							<input type="date" name="startDate" onChange={this.handleChange} />
							<input type="date" name="endDate" onChange={this.handleChange} />
						</div>
					</form>
				</div>
			);
		}
	}
}

export default AddEvent;
