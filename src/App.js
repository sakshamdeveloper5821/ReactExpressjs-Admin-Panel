import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
			<div className="row">
			<div className="col-sm-2 sidebar nopadding">
				<Sidebar/>
			</div>
			<div className="col-sm-10 header">
				<Header/>
			</div>
			<div className="col-sm-10 content nopadding">
				{this.props.children}
			</div>
		</div>
      </div>
    );
  }
}

export default App;
