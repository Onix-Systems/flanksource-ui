import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import { Icon } from "../Icon";
import { TopologySubHeader } from "./components/TopologySubHeader";
import { NodeSpecification } from "./components/NodeSpecification";
import { NodeStats } from "./components/NodeStats";
import { databases, nodes } from "../../data/topologyDatas";
import { cardStatusBorderTop } from "./utils/cardStatusBorderTop";

export const TopologyCardMedium = ({ name, properties, status }) => (
  <div
    className={cx(
      "rounded-8px mb-4 shadow-card border-t-6 card cursor-pointer",
      cardStatusBorderTop(status)
    )}
  >
    <div className="flex flex-row flex-nowrap rounded-t-8px pt-2.5 pr-2.5 pb-3.5 pl-4 bg-white">
      <div className="flex w-2/4">
        <div className="text-gray-color pt-3 mr-2.5 flex-initial max-w-1/4">
          <h3 className="text-gray-color text-2xsi">http://</h3>
        </div>
        <div className="flex-1 overflow-hidden">
          <p
            className="font-bold overflow-hidden truncate text-15pxinrem"
            title={name}
          >
            {name}
          </p>
          <h3
            className="text-gray-color overflow-hidden truncate text-2xsi"
            title="jobs-demo"
          >
            jobs-demo
          </h3>
        </div>
      </div>
      <TopologySubHeader />

      <div className="flex-initial text-1 p-1.5 mt-1 right-1.5">
        <Icon name="dots" className="" />
      </div>
    </div>
    <div className="grid grid-cols-2 bg-gray-100 rounded-b-8px py-4 px-5 gap-2">
      <div>
        {properties.map(({ name, text }, index) => (
          <NodeSpecification
            key={text}
            className={index === properties.length - 1 ? "mb-0" : "mb-2"}
            name={name}
            text={text}
          />
        ))}
      </div>
      <div>
        <div className="mb-4">
          <NodeStats title="nodes" icon="nodes" chips={nodes} />
        </div>
        <div>
          <NodeStats title="databases" icon="databases" chips={databases} />
        </div>
      </div>
    </div>
  </div>
);

TopologyCardMedium.propTypes = {
  name: PropTypes.string.isRequired,
  properties: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  status: PropTypes.string.isRequired
};
