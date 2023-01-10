import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

class Comments extends Component{
	render() {
		return(
			<div className="row scrollbar" id="style-3">
				<div className="col-sm-12 comments force-overflow">
					<p className="comment-head">{this.props.author} <a href="" className="comment delete pull-right">Delete Comment</a></p>
					
					<p className="comment-body">{this.props.body}</p>
				</div>
			</div>		
		);
	}
}

export default Comments;