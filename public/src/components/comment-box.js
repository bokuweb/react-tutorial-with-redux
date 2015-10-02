import React, { Component, PropTypes } from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';

export default class CommentBox extends Component {
  componentDidMount() {
    this.props.fetchComments();
    setInterval(this.props.fetchComments, 2000);
  }

  render() {
    const {comments, saveComment} = this.props;
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={comments} />
        <CommentForm onCommentSubmit={saveComment} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  saveComment : PropTypes.func.isRequired,
  comments : PropTypes.array.isRequired
};
