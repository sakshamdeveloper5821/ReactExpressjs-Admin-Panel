import React,{Component} from 'react';

import Services from './Services';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import Login from './Login';
import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class Dashboard extends Component{
	render(){
		return(
			<Router>
			<div>
				<App>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route exact path='/Services' component={Services}>
							<Route exact path='/' component={Home}/>
							<Route exact path='/one' component={Login}/>
							<Route exact path='/two' component={Aboutus}/>
						</Route>
						<Route exact path='/Aboutus' component={Aboutus}/>
						<Route exact path='/Contactus' component={Contactus}/>
					</Switch>
				<App>
			</div>
			</Router>	
		);
	}
}

export default Dashboard;
