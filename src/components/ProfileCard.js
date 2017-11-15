import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import ShareModal from './ShareModal';

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.toggleShareModal = this.toggleShareModal.bind(this);
  }

  toggleShareModal() {
    const { isShareModalOpen } = this.props.shared;
    const { hideShareModal, showShareModal } = this.props.sharedActions;

    if (isShareModalOpen) {
      hideShareModal();
      return;
    }

    showShareModal();
  }

  render() {
    const {
      details: userDetails,
      handleLikeAction,
      handleFollowAction,
      shared,
    } = this.props;

    const {
      profilePhoto,
      name,
      hasProfileLike,
      hasProfileFollow,
      address,
      likeCount,
      followingCount,
      followersCount
    } = userDetails;

    const { isShareModalOpen } = shared;
    const likeBtnClass = hasProfileLike ? 'icon--active' : '';
    const followBtnClass = hasProfileFollow ? 'btn--disabled' : 'btn--primary';

    return (
      userDetails !== undefined &&
      <div className="profile-card">
          <ShareModal
            onClose={this.toggleShareModal}
            isShareModalOpen={isShareModalOpen}
          />
        <i
          className={'fa fa-share-square-o icon icon--share'}
          onClick={this.toggleShareModal}
        />
        <div className="profile-card__header">
          <img className="profile-card__photo" src={profilePhoto} />
          <div className="profile-card__user-data">
            <p className="profile-card__name">
              {name}
              <i
                className={`fa fa-heart icon ${likeBtnClass}`}
                onClick={handleLikeAction}
              />
            </p>
            <p className="profile-card__address">
              {address}
            </p>
          </div>
        </div>

        <div className="profile-card__footer">
          <div className="profile-card__counters">
            <Counter title={'Likes'} counter={likeCount} />
            <Counter title={'Following'} counter={followingCount} />
            <Counter title={'Followers'} counter={followersCount} />
          </div>
          <button
            type={'button'}
            className={`btn btn--big ${followBtnClass}`}
            onClick={handleFollowAction}
          >
            {hasProfileFollow ? 'UNFOLLOW' : 'FOLLOW'}
          </button>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  details: PropTypes.object,
  handleLikeAction: PropTypes.func,
  handleFollowAction: PropTypes.func,
  shared: PropTypes.object,
  sharedActions: PropTypes.object,
};

export default ProfileCard;
