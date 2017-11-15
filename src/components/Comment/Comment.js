import PropTypes from 'prop-types';
import React from 'react';

const Comment = ({ comment }) => {
  const { userPhoto, name, commentDate, content } = comment;

  return (
    <div className={'comment'}>
      <img
        className={'comment__photo'}
        src={userPhoto}
      />
      <div className={'comment__details'}>
        <div className={'comment__meta'}>
          <p className={'comment__author'}>{name}</p>
          <p className={'comment__date'}>{commentDate}d</p>
        </div>
        <p className={'comment__content'}>{content}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
