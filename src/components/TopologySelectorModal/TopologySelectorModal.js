import React from "react";
import PropTypes from "prop-types";
import { Modal } from "../Modal";

export const TopologySelectorModal = ({
  handleModalClose,
  isOpen,
  renderTitle,
  renderParagraph,
  renderCards,
  footerStyle,
  footerText,
  footerButton
}) => (
  <Modal
    open={isOpen}
    onClose={() => handleModalClose(false)}
    cardClass="w-full"
    contentClass="h-full pt-10 pl-10 pb-10 pr-7 font-inter"
    cardStyle={{ maxWidth: "1242px" }}
    closeButtonStyle={{ padding: "2.375rem 2.375rem 0 0" }}
    hideActions
  >
    {renderTitle()}
    {renderParagraph()}
    {renderCards()}
    <div className={footerStyle}>
      {footerText()}
      {footerButton()}
    </div>
  </Modal>
);

TopologySelectorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  renderTitle: PropTypes.func.isRequired,
  renderParagraph: PropTypes.func.isRequired,
  renderCards: PropTypes.func.isRequired
};
