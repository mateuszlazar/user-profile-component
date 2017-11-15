import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Wall from '../../components/Wall/Wall';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLike = this.handleLike.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchUserProfile();
  }

  handleLike() {
    const { profile, actions } = this.props;
    const { hasProfileLike } = profile.userData.details;
    const { likeUserProfile, unlikeUserProfile } = actions;

    return hasProfileLike ? unlikeUserProfile() : likeUserProfile();
  }

  handleFollow() {
    const { profile, actions } = this.props;
    const { hasProfileFollow } = profile.userData.details;
    const { followUserProfile, unfollowUserProfile } = actions;

    return hasProfileFollow ? unfollowUserProfile() : followUserProfile();
  }

  render() {
    const { profile } = this.props;
    const { userData, isLoading } = profile;
    const { details, comments } = userData;

    return (
        !isLoading &&
        <div className="profile-container">
            <ProfileCard
              details={details}
              handleLikeAction={this.handleLike}
              handleFollowAction={this.handleFollow}
              {...this.props}
            />
            <Wall
              comments={comments}
              {...this.props}
            />
        </div>
    );
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.object,
  fetchProfile: PropTypes.func,
  likeProfile: PropTypes.func,
  unlikeProfile: PropTypes.func,
  followProfile: PropTypes.func,
  unfollowProfile: PropTypes.func,
  addComment: PropTypes.func,
  actions: PropTypes.object,
};

export default ProfileContainer;
