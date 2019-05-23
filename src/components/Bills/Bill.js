import React, { Component } from 'react';
import './Bill.css';

class Bill extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.handleBillInput = this.handleBillInput.bind(this);
	}

	handleBillInput(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	render() {
		return (
			<div className="Bill">
				<p className="Bill-Text">
					<i className={`fas fa-${this.props.bill.icon}`} />
					{this.props.bill.name}
				</p>
				<input type="text" className="Bill-Input" name={this.props.bill.name} onChange={this.handleBillInput} />
			</div>
		);
	}
}

export default Bill;
