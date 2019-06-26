import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			username: '',
			password: '',
			pwconfirm: ''
		};
		this.handleUserFields = this.handleUserFields.bind(this);
		this.login = this.login.bind(this);
		this.signup = this.signup.bind(this);
	}

	handleUserFields(evt) {
		console.log('Login: handleUserFields');
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	login(evt) {
		console.log('Login: login');
		evt.preventDefault();
		if (this.state.username && this.state.password) {
			axios.get('https://event-budget-api.herokuapp.com/api/users').then((users) => {
				let selection = users.data.filter((user) => {
					return user.username === this.state.username && user.password === this.state.password;
				});
				if (selection.length > 0) {
					let selectedUser = selection[0];
					console.log(selectedUser);
					this.props.selectUser(selectedUser);
				} else {
					window.alert('Not a valid combination. Please try again or sign up for an account.');
				}
			});
		} else {
			window.alert('Please enter your username and password.');
		}
	}

	signup(evt) {
		evt.preventDefault();
		console.log('Login: signup');
		if (this.state.username && this.state.password && this.state.pwconfirm) {
			if (this.state.password === this.state.pwconfirm) {
				let newUser = {
					username: this.state.username,
					password: this.state.password
				};
				axios
					.post('https://event-budget-api.herokuapp.com/api/users', newUser)
					.then((user) => {
						console.log(user);
						this.props.selectUser(user.data);
					})
					.catch((err) => console.error(err));
			} else {
				window.alert('Please make sure your password and confirm fields match.');
			}
		} else {
			window.alert('Please create a username and password.');
		}
	}

	render() {
		console.log('Login: render');
		return (
			<div className="Login">
				<div className="Login-Forms">
					<div className="Login-Login">
						<h2 className="Login-FormHeader">Log In</h2>
						<form onSubmit={this.login}>
							<input
								className="Login-Field"
								type="text"
								placeholder="Username"
								name="username"
								onChange={this.handleUserFields}
							/>
							<input
								className="Login-Field"
								type="password"
								placeholder="Password"
								name="password"
								onChange={this.handleUserFields}
							/>
							<input className="Login-Submit" type="submit" />
						</form>
					</div>
					<div className="Login-Signup">
						<h2 className="Login-FormHeader">Sign Up</h2>
						<form onSubmit={this.signup}>
							<input
								className="Login-Field"
								type="text"
								placeholder="Username"
								name="username"
								onChange={this.handleUserFields}
							/>
							<input
								className="Login-Field"
								type="password"
								placeholder="Password"
								name="password"
								onChange={this.handleUserFields}
							/>
							<input
								className="Login-Field"
								type="password"
								placeholder="Confirm Password"
								name="pwconfirm"
								onChange={this.handleUserFields}
							/>
							<input className="Login-Submit" type="submit" />
						</form>
					</div>
				</div>
				<p className="Login-Disclaimer">
					<em>
						Please note that this was designed to simulate login for multiple users, but there is no actual
						authentication implemented and the data is not encrypted. Please do not use a real password or
						provide any real-world information you are not comfortable sharing.
					</em>
				</p>
			</div>
		);
	}
}

export default Login;
