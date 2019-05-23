import React, { Component } from 'react';
import './Sidenav.css';
import { NavLink } from 'react-router-dom';

class Sidenav extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<div className="sidebar">
				<NavLink to="/">
					<i className="sidebar-nav fa fa-home" /> Home
				</NavLink>
				<NavLink to="/expenses">
					<i className="sidebar-nav fa fa-credit-card-alt" /> Expenses
				</NavLink>
				<NavLink to="#">
					<i className="sidebar-nav fa fa-money" /> Income
				</NavLink>
				{/* <Link to="#contact"><i className="sidebar-nav fa fa-fw fa-calendar-check-o"></i> Event</Link> */}
				{/* <Link to="#contact"><i className="sidebar-nav fa fa-car"></i> Event</Link>     */}
				{/* <NavLink to="#contact"><i className="sidebar-nav fa fa-smile-o"></i> Event</NavLink>  */}
			</div>
		);
	}
}

export default Sidenav;

// Icons Reference: https://www.w3schools.com/icons/fontawesome_icons_webapp.asp
