import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import { TopologyCard } from "../Topology";
import { Modal } from "../Modal";

export const TopologySelectorModal = ({
  handleModalClose,
  isOpen,
  footerStyle,
  footerText,
  topologies,
  title,
  titleStyle,
  footerTextStyle,
  buttonStyle,
  buttonTitle,
  setSendData
}) => {
  const [checked, setChecked] = useState({
    column_1_card_1: true,
    column_2_card_1: true
  });
  const toggleChecked = (id, checked) => {
    setChecked((prevState) => ({ ...prevState, [id]: checked }));
  };
  return (
    <Modal
      open={isOpen}
      onClose={() => handleModalClose()}
      cardClass="w-full"
      contentClass="h-full pt-10 pl-10 pb-10 pr-7 font-inter"
      cardStyle={{ maxWidth: "77.6rem" }}
      closeButtonStyle={{ padding: "2.375rem 2.375rem 0 0" }}
      containerClass="p-4"
      hideActions
    >
      <h1 className={titleStyle}>{title}</h1>
      <div
        className="grid gap-4 w-full overflow-x-auto"
        style={{ gridTemplateColumns: "repeat(5, 224px)" }}
      >
        {topologies.map((topology, indexTopologies) => (
          <div key={uuid()} className="p-3">
            {topology.map((item, index) => (
              <TopologyCard
                size="small"
                topology={item}
                key={uuid()}
                selectionMode
                selected={
                  !!checked[`column_${indexTopologies + 1}_card_${index + 1}`]
                }
                onSelectionChange={(state) => {
                  toggleChecked(
                    `column_${indexTopologies + 1}_card_${index + 1}`,
                    state
                  );
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={footerStyle}>
        <p className={footerTextStyle}>
          {Object.values(checked).filter((item) => item === true).length}{" "}
          {footerText}
        </p>
        <button
          type="button"
          className={buttonStyle}
          onClick={() => setSendData(checked)}
        >
          {buttonTitle}
        </button>
      </div>
    </Modal>
  );
};
TopologySelectorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  footerStyle: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.string.isRequired,
  footerTextStyle: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  setSendData: PropTypes.func.isRequired
};
