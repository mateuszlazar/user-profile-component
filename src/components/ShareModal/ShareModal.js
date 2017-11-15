import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { shareModalStyle } from './shareModalStyle';

const ShareModal = ({ onClose, isShareModalOpen }) => (
  <Modal
    isOpen={isShareModalOpen}
    onRequestClose={onClose}
    style={shareModalStyle}
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
