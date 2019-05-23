import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './AddEvent.css';

let placeholder = [
	'Take me to Greece!',
	'Road trip to Mount Rushmore',
	'Honeymoon in Hawaii',
	'Bermuda, Bahama, come on pretty mama'
];

let userId = '5ce45ac1456d2e0017bb0d7f';

class AddEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trip: '',
			startDate: '',
			endDate: '',
			submitted: false
		};
		this.handleChange = this.handleChange.bind(this);
		// this.eventDetails = this.eventDetails.bind(this);
		this.handleEventDetails = this.handleEventDetails.bind(this);
	}

	handleChange(event) {
		console.log('Home: handleChange');
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	// eventDetails(trip) {
	// 	console.log('Home: eventDetails');
	// 	let newEvent = {
	// 		trip: this.state.trip
	// 	};
	// 	this.props.addEvent(newEvent);
	// }

	handleEventDetails(event) {
		console.log('Home: handleEventDetails');
		event.preventDefault();
		let newEvent = {
			name: this.state.name,
			dates: {
				start: this.state.startDate,
				end: this.state.endDate
			}
		};
		console.log(newEvent);
		axios.post(`https://event-budget-api.herokuapp.com/api/${userId}/events`, newEvent).then((event) => {
			console.log(event);
		});
		this.setState({ submitted: true });
		// Reference:  https://stackoverflow.com/questions/28907965/how-do-i-add-a-component-after-an-submit-event-using-reactjs
	}

	componentDidMount() {
		console.log('Home: componentDidMount');
		var x = Math.floor(Math.random() * placeholder.length);
		let placeholderVal = placeholder[x];
		console.log(placeholderVal);
		this.setState({
			placeholder: placeholderVal
		});
	}

	render() {
		if (this.state.submitted === true) {
			return <Redirect to="/event-cost" />;
		} else {
			return (
				<div className="content">
					<h1>Where do you want to go?</h1>
					<h1>What do you want to do?</h1>

					{/* <input
							type="text"
							name="event"
							id="event"
							placeholder="Take me to Greece!"
							onChange={this.handleChange}
							onSubmit={this.eventDetails}
						/> */}

					<form onSubmit={this.handleEventDetails}>
						<input
							type="text"
							name="name"
							// value={this.state.trip}
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
