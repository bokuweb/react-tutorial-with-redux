import React, { Component, PropTypes } from 'react';
import CommentList from './comment-list';
import CommentForm from './comment-form';

export default class CommentBox extends Component {
  render() {
    const {comments, handleCommentSubmit} = this.props;
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={comments} />
        <CommentForm onCommentSubmit={handleCommentSubmit} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  handleCommentSubmit : PropTypes.func.isRequired,
  comments : PropTypes.array.isRequired
};
