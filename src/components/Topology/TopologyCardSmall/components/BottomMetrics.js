import React from "react";
import PropTypes from "prop-types";

export const BottomMetrics = ({ items }) => {
  const [firstItem, secondItem, thirdItem] = items;

  return (
    <div className="grid grid-cols-small-card-metrics bg-lightest-gray px-2 py-4 rounded-b-8px divide-x leading-none">
      <div>
        <div className="text-gray-800 px-2">
          <span className="text-gray-color text-xs font-medium leading-tightly">
            {firstItem.name}
          </span>
          <p className="font-bold text-sm leading-tightly">{firstItem.value}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-gray-800 px-2">
          <span className="text-gray-color text-xs font-medium leading-tightly">
            {secondItem.name}
          </span>
          <p className="font-bold text-sm leading-tightly">
            {secondItem.value}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-gray-800 px-2">
          <span className="text-gray-color text-xs font-medium leading-tightly">
            {thirdItem.name}
          </span>
          <p className="font-bold text-sm leading-tightly">{thirdItem.value}</p>
        </div>
      </div>
    </div>
  );
};

BottomMetrics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};
