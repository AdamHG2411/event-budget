import React, { Component } from 'react';
import './Sidenav.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/logo.png';

class Sidenav extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		console.log('Sidenav: render');
		return (
			<div>
				<div className="master-header">
					<Link to="/">
						<img src={logo} alt="logo" className="logo" />
					</Link>
					<h1 className="catch-phrase">
						<hr className="heading-line" />Budget better by tracking backwards
					</h1>
				</div>
				<div className="sidebar">
					<div className="nav-all">
						<NavLink exact to="/" activeClassName="Nav-Selected">
							{/* <i className="sidebar-nav" /> DASHBOARD */}
							<p className="sidebar-nav">DASHBOARD</p>
						</NavLink>
						<NavLink to="/events" activeClassName="Nav-Selected">
							{/* <i className="sidebar-nav" /> GOAL */}
							<p className="sidebar-nav">GOALS</p>
						</NavLink>
						<NavLink to="/bills" activeClassName="Nav-Selected">
							{/* <i className="sidebar-nav fa fa-credit-card-alt" /> BILLS */}
							<p className="sidebar-nav">BILLS</p>
						</NavLink>
						<NavLink to="/income" activeClassName="Nav-Selected">
							{/* <i className="sidebar-nav fa fa-money" /> INCOME */}
							<p className="sidebar-nav">INCOME</p>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidenav;

// Icons Reference: https://www.w3schools.com/icons/fontawesome_icons_webapp.asp
