import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';

class Wall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newComment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
  }

  handleChange(e) {
    this.setState({
      newComment: e.target.value,
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleNewComment(this.state.newComment);
      this.setState({
        newComment: ''
      });
    }
  }

  handleNewComment(comment) {
    const { actions } = this.props;
    const { addNewComment } = actions;

    return addNewComment(comment);
  }

  toggleComments() {
    const { isCommentListVisible } = this.props.shared;
    const { hideCommentList, showCommentList } = this.props.sharedActions;

    if (isCommentListVisible) {
      hideCommentList();
      return;
    }

    showCommentList();
  }

  render() {
    const { shared, profile } = this.props;
    const { isCommentListVisible } = shared;
    const { comments } = profile.userData;

    const commentListState = isCommentListVisible ? '' : 'wall--hide';

    return (
      <div className={`wall ${commentListState}`}>
        <p className={'link'} onClick={this.toggleComments}>
          { isCommentListVisible ? 'Hide comments' : 'Show comments' } ({comments.length})
        </p>
        <CommentList
          comments={comments}
          isCommentListVisible={isCommentListVisible}
        />
        <div className={'wall__new-comment'}>
          <input
            type={'text'}
            placeholder={'Add a comment'}
            value={this.state.newComment}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}

Wall.propTypes = {
  profile: PropTypes.object,
  comments: PropTypes.array,
  actions: PropTypes.object,
  shared: PropTypes.object,
  sharedActions: PropTypes.object,
};

export default Wall;
