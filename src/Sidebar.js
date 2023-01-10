import React,{Component} from 'react';

class Sidebar extends Component{
	render(){
		return(
			<div className="">
				<div className="sidebar-nav-fixed">
					<div className="container-fluid nopadding">
						<ul className="nav nav-ul">
							<li className="nav-header sidebar-header toppadding">Admin Panel</li>
							<li className="toppadding"><a href="">Users</a></li>
							<li className="toppadding"><a href="">Services</a></li>
							<li className="toppadding"><a href="">Lists</a></li>
							<li className="toppadding"><a href="">About US</a></li>
							<li className="toppadding"><a href="">Contact Us</a></li>
							<li className="toppadding"><a href="">Users</a></li>
							<li className="toppadding"><a href="">Users</a></li>

						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;