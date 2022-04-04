import React from "react";
import PropTypes from "prop-types";
import { BsPlusLg } from "react-icons/all";
import clsx from "clsx";

export const HypothesisBlockHeader = ({
  title,
  noResults,
  noResultsTitle,
  onButtonClick,
  className
}) => (
  <div className={clsx("flex align-baseline text-sm font-medium", className)}>
    <p className="text-dark-gray mr-2.5 mt-0.5 font-medium">
      {noResults && noResultsTitle ? noResultsTitle : title}
    </p>
    <button
      type="button"
      className="btn-round btn-round-primary btn-round-xs"
      onClick={onButtonClick}
    >
      <BsPlusLg />
    </button>
  </div>
);

HypothesisBlockHeader.propTypes = {
  title: PropTypes.string.isRequired,
  noResults: PropTypes.bool,
  noResultsTitle: PropTypes.string,
  className: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired
};

HypothesisBlockHeader.defaultProps = {
  noResults: false,
  noResultsTitle: "",
  className: ""
};
