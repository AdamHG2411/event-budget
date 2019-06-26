import React, { Component } from 'react';
import BillCategory from './BillCategory.js';
import axios from 'axios';
import './Bills.css';

class Bills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			billCategories: [ 'Home', 'Car', 'Food', 'Fixed Expenses', 'Technology', 'Lifestyle' ],
			newBills: [],
			bills: [
				{
					name: 'Rent / Mortgage',
					icon: 'home',
					category: 'Home'
				},
				{
					name: 'Electric',
					icon: 'plug',
					category: 'Home'
				},
				{
					name: 'Gas',
					icon: 'burn',
					category: 'Home'
				},
				{
					name: 'Water',
					icon: 'tint',
					category: 'Home'
				},
				{
					name: 'Car Payment',
					icon: 'car',
					category: 'Car'
				},
				{
					name: 'Car Insurance',
					icon: 'car-crash',
					category: 'Car'
				},
				{
					name: 'Gas',
					icon: 'gas-pump',
					category: 'Car'
				},
				{
					name: 'Groceries',
					icon: 'shopping-cart',
					category: 'Food'
				},
				{
					name: 'Restaurants',
					icon: 'utensils',
					category: 'Food'
				},
				{
					name: 'Education',
					icon: 'graduation-cap',
					category: 'Fixed Expenses'
				},
				{
					name: 'Healthcare',
					icon: 'stethoscope',
					category: 'Fixed Expenses'
				},
				{
					name: 'Cell Phone',
					icon: 'mobile-alt',
					category: 'Technology'
				},
				{
					name: 'Internet',
					icon: 'wifi',
					category: 'Technology'
				},
				{
					name: 'Cable',
					icon: 'ethernet',
					category: 'Technology'
				},
				{
					name: 'Streaming (Netflix, Hulu, HBO)',
					icon: 'tv',
					category: 'Technology'
				},
				{
					name: 'Gym',
					icon: 'dumbbell',
					category: 'Lifestyle'
				},
				{
					name: 'Beauty',
					icon: 'eye',
					category: 'Lifestyle'
				},
				{
					name: 'Clothing',
					icon: 'tshirt',
					category: 'Lifestyle'
				},
				{
					name: 'Entertainment / Social',
					icon: 'gamepad',
					category: 'Lifestyle'
				},
				{
					name: 'Shopping',
					icon: 'tag',
					category: 'Lifestyle'
				},
				{
					name: 'Retirement',
					icon: 'piggy-bank',
					category: 'Lifestyle'
				}
			]
		};
		this.submitBills = this.submitBills.bind(this);
		this.addNewBill = this.addNewBill.bind(this);
		this.togglePanel = this.togglePanel.bind(this);
	}

	addNewBill(newBill) {
		let newBills = this.state.newBills;
		newBills.push(newBill);
		this.setState({ newBills: newBills });
	}

	submitBills(evt, newBillArray) {
		evt.preventDefault();
		axios
			.post(
				`https://event-budget-api.herokuapp.com/api/${this.props.userId}/bills/`,
				this.state.newBills.filter((newBill) => {
					return newBill.name;
				})
			)
			.then((res) => {
				console.log(res);
			});
	}
	togglePanel(evt) {
		this.setState({ open: !this.state.open });
	}

	render() {
		console.log('Bills: render');
		let categories = [];
		for (let i = 0; i < this.state.billCategories.length; i++) {
			categories.push(
				<div key={i}>
					<BillCategory
						addNewBill={this.addNewBill}
						{...this.props}
						category={this.state.billCategories[i]}
						bills={this.state.bills.filter((bill) => bill.category === this.state.billCategories[i])}
					/>
				</div>
			);
		}
		// if (this.state.open === true) {
		// 	console.log('true');
		return (
			<div className="Bills">
				<h1 className="Bills-header">What are your monthly expenses?</h1>
				{/* <h1 className="Income-header" onClick={(e) => this.togglePanel()}>
						Income{' '}
					</h1> */}
				{/* <h1 className="Income-header">Income</h1> */}
				<hr />
				<div className="Bills-CategoryList">
					<form onSubmit={this.submitBills}>
						{categories}
						<input type="submit" className="Bills-Submit" />
					</form>
				</div>
			</div>
		);
		// } else {
		// 	console.log('false');
		// 	return <Income />;
		// }
	}
}

export default Bills;
