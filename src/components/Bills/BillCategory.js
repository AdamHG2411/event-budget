import React, { Component } from 'react';
import Bill from './Bill.js';
import './BillCategory.css';

class BillCategory extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			open: false
		};
		this.togglePanel = this.togglePanel.bind(this);
	}

	// REFERENCE: https://medium.com/@subalerts/implememting-a-simple-collapsible-component-in-react-js-67c796e64652
	togglePanel(evt) {
		this.setState({ open: !this.state.open });
	}

	render() {
		let bills = [];
		for (let i = 0; i < this.props.bills.length; i++) {
			bills.push(<Bill key={i} bill={this.props.bills[i]} />);
		}
		return (
			<div className="BillCategory" onClick={(e) => this.togglePanel()}>
				<h2 className="BillCategory-Title">
					{this.props.category}
					<span>+</span>
				</h2>
				{this.state.open ? <div className="BillCategory-BillList">{bills}</div> : null}
			</div>
		);
	}
}

export default BillCategory;
