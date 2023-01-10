import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component{
  render(){
    // const comments = this._getComments();
    // if(this.state.showComments){
    //   // Add Code for comments
    // }
    return(
      <div className="">
        <nav className="navbar navbar-inverse"> 
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to="/">Astro</NavLink>
            </div>
            <ul className="nav navbar-nav">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/Services"}>Services</NavLink></li>
              <li><NavLink to={"/Contactus"}>Contact US</NavLink></li>
              <li><NavLink to={"/Aboutus"}>About Us</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><button className="btn btn-primary">toggle</button></li>
              <li><NavLink to="/Login"><span className="glyphicon glyphicon-user"></span> Login </NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;











