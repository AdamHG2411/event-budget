import React, { Component } from 'react';
import './Income.css';

class Income extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
		this.togglePanel = this.togglePanel.bind(this);
	}
	togglePanel(evt) {
		this.setState({ open: !this.state.open });
	}

	render() {
		// if (this.state.open === true ) {
		return (
			<div className="Income">
				{/* // onClick={(e) => this.togglePanel()}> */}
				<h1 className="Income-header">What is your total income?</h1>
				<hr />
				<div className="Income-all-lines">
					<div className="Income-line-items">
						<input type="text" className="Income-inputs" placeholder="0.00 per month" />
						<p className="Income-text">Monthly Salary</p>
					</div>
					{/* </div> */}
					{/* <div className="Income-line-items"> */}
					<div className="Income-line-items">
						<input type="text" className="Income-inputs" placeholder="0.00 per month" />
						<p className="Income-text">Second Job Salary</p>
					</div>
					{/* </div> */}
					{/* <div className="Income-line-items"> */}
					<div className="Income-line-items">
						<input type="text" className="Income-inputs" placeholder="0.00 per month" />
						<p className="Income-text">Side Hustle</p>
					</div>
				</div>

				<input type="submit" className="Income-Submit" />
			</div>
		);
		// }
		// else {
		//     console.log("false")
		//     return <Bills />
		// }
	}
}

export default Income;
