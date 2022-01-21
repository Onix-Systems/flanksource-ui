import React from "react";
import cx from "clsx";

const getBackgroundColorClass = (color) => {
  switch (color) {
    case "red":
      return "bg-light-red";
    case "orange":
      return "bg-light-orange";
    case "green":
      return "bg-light-green";
    case "gray":
      return "bg-light-gray";
    default:
      return "bg-light-green";
  }
};

export const NodeStatsChip = ({ text, color }) => (
  <div
    className={cx(
      "text-center align-baseline min-w-8 min-h-8 text-2xs font-inter rounded-4px font-bold break-all",
      getBackgroundColorClass(color)
    )}
  >
    {text}
  </div>
);

NodeStatsChip.propTypes = {};
