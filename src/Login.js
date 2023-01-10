import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

class Login extends Component{
	render() {
		return(
			<div className="row">
				<div className="container content col-xs-6 login">
					<h2>Please Login</h2>
					<div className="well well-sm">You Have Logout Succesfully!!</div>
					<div className="Login-block">
						<form>
							<div className="input-group">
								<span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
    							<input id="userid" type="text" className="form-control" name="userid" placeholder="Email Id..."/>
							</div>
							<div className="input-group">
								<span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
    							<input id="password" type="password" className="form-control" name="password" placeholder="Password..."/>
							</div>
							<button type="button" className="btn btn-info"><NavLink to="/Home">Login</NavLink></button>
						</form>
						<h1></h1>
					</div>
				</div>
			</div>		
		);
	}
}

export default Login;