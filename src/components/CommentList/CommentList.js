import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import Comment from '../Comment/Comment';

class CommentList extends Component {
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

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  isCommentListVisible: PropTypes.bool.isRequired
};

export default CommentList;
