import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import { Icon } from "../Icon";

export const IconButton = ({ icon, className }) => (
  <button type="button" className={cx("", className)}>
    <Icon name={icon} className="" />
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired
};
