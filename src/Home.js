import React,{ Component } from 'react';
import Comments from './Comments';
import CommentForm from './CommentForm';

class Home extends Component{
	constructor() {
		super();
		this.state = {
		showComments: false,
		/*static data remove comment if static dta needed*/
		/*comments: [
				{ id: 1, author: 'Jalaj Goel', body: 'Great Picture!!' },
				{ id: 2, author: 'Ankit Verma', body: 'Awesome!!!'  },
				{ id: 3, author: 'Divya', body: 'Lovely....!!!'  },
			]*/
		/*Dynamic Data*/
		comments: []
		};
	}	
	componentWillMount() {
		this._fetchComments();
	}
	componentDidMount() {
		this._timer = setInterval(() => this._fetchComments(), 5000);
	}
	componentWillUnmount() {
		clearInterval(this._timer);
	}
	_fetchComments() {
		let url = "https://jsonplaceholder.typicode.com/comments";
		fetch(url).then(results => {
			console.log(results);
			return results.json();
		}).then(data => {
			data.map((comment_data) =>{
			this.setState({comments: this.state.comments.concat([comment_data]) });
			})
		})
	}
	_getComments(){
			const commentList = this.state.comments;
			return commentList.map((comment) => {
					return <Comments author= {comment.name} body= {comment.body} key= {comment.id} />
				/*comment.map((data) =>{
					console.log(data.id);
				return <Comments author= {data.name} body= {data.body} key= {data.id} />
				}) */
			});
		}
	_handleClick()	{
		this.setState({
			showComments: !this.state.showComments
		})
	}
	_addComment(author, body){
		const comment = {
			id: this.state.comments.length + 1,
			author,
			body
		};
		this.setState({comments: this.state.comments.concat([comment]) });
	}
	render(){
		const data = this._getComments();
		let commentNodes;
		let buttonText = "Show Comments";
		if(this.state.showComments) {
			buttonText = 'Hide Comments';
			commentNodes = <li>{data}</li>;
		}
		return(
			<div className="row main">
				<div className="col-sm-12">
					<div className="comment_box">
						<div className="row">
							<div className="col-sm-12 add_comment">
								<CommentForm addComment = {this._addComment.bind(this)}/>
							</div>
							<div className="col-sm-12 comments_header">
								<div className="row">
									<div className="col-sm-6 pull-left comments_heading">
										<p className="comments_heading_text">{ data.length } Comments</p>
									</div>
									<div className="col-sm-6 comments_toggle">
										<button className="comments_toggle_button btn btn-primary pull-right col-sm-12" onClick = {this._handleClick.bind(this)}>{buttonText}</button>
									</div>
								</div>
							</div>
							<div className="col-sm-12 comments_content">
								<ul>
									{commentNodes}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;