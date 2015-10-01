import React, { Component, PropTypes } from 'react';
import Comment from './comment'

export default class CommentList extends Component {
  render() {
    const commentNodes = this.props.comments.map((comment, index) => {
      return (
        <Comment author={comment.author} key={index}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

CommentList.propTypes = {
  comments : PropTypes.array.isRequired
};
