import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import { getTopologyCardStatusBorderTopColor } from "../../utils/getTopologyCardStatusBorderTopColor";
import { BottomMetrics } from "./components/BottomMetrics";
import { TopologyDropdownMenu } from "../TopologyDropdownMenu/TopologyDropdownMenu";
import { Icon } from "../Icon";

export const TopologyCardSmall = ({
  name,
  status,
  selectionMode,
  selected,
  onSelectionChange
}) => (
  <div
    className={cx(
      "rounded-8px mb-4 shadow-card border-t-6 card cursor-pointer bg-white",
      getTopologyCardStatusBorderTopColor(status)
    )}
  >
    <div className="flex flex-row flex-nowrap rounded-t-8px pt-2.5 pr-1.5 pb-2.5 pl-4 bg-white relative">
      <div className="text-gray-color pt-2.5 mr-2.5 flex-initial max-w-1/4 leading-1.21rel">
        <span className="text-gray-color text-2xsi leading-1.21rel">
          http://
        </span>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <p className="font-bold overflow-hidden truncate text-1 leading-1.21rel mb-px">
          {name}
        </p>
        <span
          className="text-gray-color overflow-hidden truncate text-xs leading-1.21rel"
          title="jobs-demo"
        >
          jobs-demo
        </span>
      </div>
      {selectionMode ? (
        <div className="mr-1.5 mt-1 flex min-w-7 justify-end items-start">
          <input
            type="checkbox"
            id={label}
            className="h-4 w-4 text-dark-blue outline-none rounded-4px focus:outline-none"
            checked={selected}
            onChange={onSelectionChange}
          />
        </div>
      ) : (
        <div className="mt-1.5">
          <TopologyDropdownMenu
            className="flex flex-initial"
            menuButtonClassName="flex-initial text-1 p-1.5 min-w-7 rounded-full hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-200"
            renderButton={() => <Icon name="dots" className="" />}
            items={[
              { title: "Duplicate" },
              { title: "Share" },
              { title: "Delete" }
            ]}
          />
        </div>
      )}
    </div>
    <BottomMetrics
      items={[
        { name: "RPS:", value: "165/s" },
        { name: "Errors:", value: "0.1%" },
        { name: "Latency:", value: "225ms" }
      ]}
    />
  </div>
);

TopologyCardSmall.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  selectionMode: PropTypes.bool,
  selected: PropTypes.bool,
  onSelectionChange: PropTypes.func
};

TopologyCardSmall.defaultProps = {
  selectionMode: false,
  selected: false,
  onSelectionChange: () => {}
};
