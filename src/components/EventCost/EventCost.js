import React, { Component } from 'react';
import Expenses from '../Bills/Bills';
import axios from 'axios';
import '../EventCost/EventCost.css';

class EventCost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			planeticket: '',
			gas: '',
			accomodation: '',
			transportation: '',
			food: '',
			total: ''
		};

		this.handleChange = this.handleChange.bind(this);
		// this.handleTotal = this.handleTotal.bind(this);
		// this.handleTotalCost = this.handleTotalCost.bind(this);
	}

	handleChange(event) {
		let value;
		if (isNaN(parseInt(event.target.value, 10))) {
			value = 0;
		} else {
			value = event.target.value;
		}
		this.setState({
			[event.target.name]: value
		});
	}

	componentDidUpdate() {
		let values = [
			this.state.planeticket,
			this.state.gas,
			this.state.accomodation,
			this.state.transportation,
			this.state.food
		];
		let addValues = values.filter((value) => !isNaN(parseInt(value, 10)));
		console.log(addValues);
		if (
			// eslint-disable-next-line
			parseInt(this.state.total, 10) !=
			addValues.reduce((acc, cv) => {
				return (acc = parseInt(acc, 10) + parseInt(cv, 10));
			}, 0)
		) {
			this.setState({
				total: addValues.reduce((acc, cv) => {
					return (acc = parseInt(acc, 10) + parseInt(cv, 10));
				}, 0)
			});
		}
	}

	// handleTotal(event) {
	//     event.preventDefault();
	//     let total = 0;
	//     console.log(this.state.length)
	//     for(var i=0;i<6;i++){
	//         if(parseInt(this.state[i].value))
	//             total += parseInt(this.state[i].value);
	//     }
	// }

	handleTotalCost(event) {
		event.preventDefault();
		let expenses = [
			{
				name: 'planeticket',
				cost: this.state.planeticket
			},
			{
				name: 'gas',
				cost: this.state.gas
			},
			{
				name: 'accomodation',
				cost: this.state.accomodation
			},
			{
				name: 'transportation',
				cost: this.state.transportation
			},
			{
				name: 'food',
				cost: this.state.food
			}
		];
		expenses.forEach((expense) => {
			axios
				.post(
					`https://event-budget-api.herokuapp.com/api/${this.props.userId}/events/${this.props
						.eventId}/expenses`,
					expense
				)
				.then((exp) => {
					console.log(exp);
				});
		});

		// console.log(totalCost);
		// this.props.addTotalCost(totalCost);

		// this.setState({ submitted: true });
	}

	render() {
		if (this.state.submitted) {
			return <Expenses />;
		} else {
			return (
				<div className="container2">
					<div className="prompt2">
						<h1>How Much Will It Cost? (Round up!)</h1>

						<form className="form" onSubmit={this.handleTotalCost}>
							<div className="small-box">
								<p>Plane ticket cost</p>
								<input
									className="event-box-prices"
									type="text"
									id="planeticket"
									name="planeticket"
									defaultValue="0"
									// value={parseInt(this.state.planeticket, 10)}
									// placeholder="1500"
									onChange={this.handleChange}
								/>
							</div>

							<div className="small-box">
								<p>Gas cost</p>
								<input
									className="event-box-prices"
									type="text"
									id="gas"
									defaultValue="0"
									// value={parseInt(this.state.gas, 10)}
									// placeholder="100"
									onChange={this.handleChange}
									name="gas"
								/>
							</div>

							<div className="small-box">
								<p>Hotel/ Airbnb</p>
								<input
									className="event-box-prices"
									type="text"
									id="accomodation"
									defaultValue="0"
									// value={parseInt(this.state.accomodation, 10)}
									// placeholder="1000"
									onChange={this.handleChange}
									name="accomodation"
								/>
							</div>

							<div className="small-box">
								<p>Train/ Uber costs</p>
								<input
									className="event-box-prices"
									type="text"
									id="transportation"
									defaultValue="0"
									// value={parseInt(this.state.transportation, 10)}
									// placeholder="100"
									onChange={this.handleChange}
									name="transportation"
								/>
							</div>

							<div className="small-box">
								<p>Food estimate</p>
								<input
									className="event-box-prices"
									type="text"
									id="food"
									defaultValue="0"
									// value={parseInt(this.state.food, 10)}
									// placeholder="300"
									onChange={this.handleChange}
									name="food"
								/>
							</div>

							<div className="small-box">
								<p>TOTAL</p>
								<div className="event-box-prices" id="total" name="total">
									{this.state.total}
								</div>
							</div>

							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default EventCost;
