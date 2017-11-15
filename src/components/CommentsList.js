import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { Scrollbars } from 'react-custom-scrollbars';


class CommentsList extends Component {
  render() {
    const { comments, isCommentListVisible } = this.props;
    const commentListState = isCommentListVisible ? '' : 'comment-list--hide';

    return (
      <Scrollbars className={`comment-list ${commentListState}`}>
        {
          comments
            .sort((a, b) => b.commentDate - a.commentDate)
            .map((comment, index) =>
              <Comment key={index} comment={comment} />
            )
        }
      </Scrollbars>
    );
  }
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  isCommentListVisible: PropTypes.bool.isRequired
};

export default CommentsList;
