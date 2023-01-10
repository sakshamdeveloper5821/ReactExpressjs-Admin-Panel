import React,{ Component } from 'react';
import {NavLink} from 'react-router';

class Services extends Component{
	render(){
		return(
			<div className="services">
				<h1>Hello Services</h1>	
				<NavLink to={"Services/one"}>one </NavLink>
				<NavLink to={"Services/two"}> two</NavLink>
				{this.props.children}
			</div>
		);
	}
}

export default Services;