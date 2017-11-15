import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profile/profileActions';
import * as sharedActions from '../actions/shared/sharedActions';
import ProfileContainer from './ProfileContainer/ProfileContainer';

class App extends Component {
  render() {
    const { props } = this;

    return (
      <div className="main-app-container">
        <ProfileContainer {...props} />
      </div>
    );
  }
}

App.propTypes = {
  sharedActions: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
    shared: state.shared
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch),
    sharedActions: bindActionCreators(sharedActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
