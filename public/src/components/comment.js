import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

Comment.propTypes = {
  author : PropTypes.string.isRequired,
  children : PropTypes.string.isRequired
};
