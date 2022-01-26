import React from "react";
import PropTypes from "prop-types";
import { TopologySelectorModal } from "../../../components/TopologySelectorModal/TopologySelectorModal";

export const TopologyPageModalView = ({
  modal,
  setModal,
  topologies,
  setSendData
}) => (
  <div>
    <button
      type="button"
      className="py-3 px-6 bg-dark-blue rounded-6px text-white mb-4"
      onClick={() => {
        setModal(true);
      }}
    >
      Open Modal
    </button>
    <TopologySelectorModal
      handleModalClose={() => setModal(false)}
      isOpen={modal}
      topologies={topologies}
      title="Add Card"
      titleStyle="text-2xl font-semibold mb mb-6"
      footerStyle="flex justify-end mt-7 align-baseline"
      footerText="cards selected"
      footerTextStyle="text-base font-medium mt-3"
      buttonStyle="py-3 px-6 bg-dark-blue rounded-6px text-white ml-6 hover:bg-warm-blue"
      buttonTitle="Add"
      setSendData={(data) => {
        setSendData(data);
      }}
    />
  </div>
);

TopologyPageModalView.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  setSendData: PropTypes.func.isRequired
};
