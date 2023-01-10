import React, {Component} from 'react';

class CommentForm extends Component{
	
	render() {
		return(
			<div className="row">
				<div className="col-sm-12">
					<form className="comment_form" onSubmit = {this._handleSubmit.bind(this)}>
						<label>Join The Discussion   </label>
						<div className="form_fields form-group">
							<input className="form-control padding margin_top" placeholder="Author.." ref = {(input) => this._author = input}/>
							<textarea className="form-control padding margin_top" placeholder="Comment.." ref = {(textarea) => this._body = textarea}></textarea>
							<input className="btn btn-success padding margin_top" type="submit" value="POST Comment"/>
						</div>
					</form>
				</div>
			</div>
		)
	}
	_handleSubmit(event){
		event.preventDefault();

		let author = this._author;
		let body = this._body;
		this.props.addComment(author.value, body.value)
	}
}

export default CommentForm;