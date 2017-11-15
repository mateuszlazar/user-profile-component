import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ShareModal = ({ onClose, isShareModalOpen }) => (
  <Modal
    isOpen={isShareModalOpen}
    onRequestClose={onClose}
    style={customModalStyle}
    shouldCloseOnOverlayClick
  >
    <p>Share link of this profile!</p>
    <p>{window.location.href}</p>
    <button
      className={`btn btn--primary`}
      onClick={onClose}
    >
      Close Modal
    </button>
  </Modal>
  );

ShareModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ShareModal;
