import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import { Icon } from "../Icon";

export const IconButton = ({ icon, className, iconClassName, variant }) => {
  let buttonClassName;
  switch (variant) {
    case "gray":
      buttonClassName =
        "rounded-full hover:bg-gray-500 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-500";
      break;
    case "blue":
      buttonClassName =
        "rounded-full hover:bg-blue-500 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500";
      break;
    case "yellow":
      buttonClassName =
        "rounded-full hover:bg-yellow-500 active:bg-blue-500-500 focus:outline-none focus:ring focus:ring-yellow-500";
      break;
    default:
      iconClassName =
        "rounded-full hover:bg-gray-500 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-500";
  }
  return (
    <button
      type="button"
      className={cx("p-1.5 min-w-7", className, buttonClassName)}
    >
      <Icon name={icon} className={cx("", iconClassName)} />
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string
};
IconButton.defaultProps = {
  className: "",
  iconClassName: ""
};
