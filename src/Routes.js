import React,{Component} from 'react';

import Login from './Login';
import Dashboard from './Dashboard';


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class Routes extends Component{
	render(){
		return(
			<Router>
				<div>
					<Route exact path='/' component={Login}/>
					<Route exact path='/Home' component={Dashboard}/>
					
				</div>
			</Router>	
		);
	}
}

export default Routes;