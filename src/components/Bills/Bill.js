import React, { Component } from 'react';
import './Bill.css';

class Bill extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.handleBillInput = this.handleBillInput.bind(this);

		this.state = {};
		this.sendUp = this.sendUp.bind(this);
	}

	handleBillInput(evt) {
		console.log('Bill: handleBillInput');
		this.setState({
			name: evt.target.name,
			amount: evt.target.value
		});
	}

	sendUp(evt) {
		let newBill = this.state;
		this.props.addNewBill(newBill);
	}

	render() {
		console.log(this.props);
		console.log(this.props.bill);
		console.log(this.state.amount);
		console.log(this.props.userId);
		return (
			<div className="Bill">
			<input
					type="text"
					className="Bill-Input"
					placeholder="0.00 per month"
					name={this.props.bill.name}
					onChange={this.handleBillInput}
					onBlur={this.sendUp}
				/>
				<p className="Bill-Text">
					{/* <i className={`fas fa-${this.props.bill.icon}`} /> */}
					{this.props.bill.name}
				</p>
			</div>
		);
	}
}

export default Bill;
