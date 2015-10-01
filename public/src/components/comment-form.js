import React, { Component, PropTypes } from 'react';

export default class CommentForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const author = React.findDOMNode(this.refs.author).value.trim();
    const text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

CommentForm.propTypes = {
  onCommentSubmit : PropTypes.func.isRequired
};
