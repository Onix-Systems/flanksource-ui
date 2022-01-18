import React from "react";
import PropTypes from "prop-types";
import { TopologyColumn } from "../../../components/TopologyColumn/TopologyColumn";
import { TopologyCardMedium } from "../../../components/TopologyColumn/TopologyCardMedium/TopologyCardMedium";
import { colorHandler } from "../../../utils/common";

export const TopologyPageMediumView = ({ topology }) => {
  const cards = topology.map(({ name, color }) => (
    <TopologyCardMedium
      key={name}
      title={name}
      color={colorHandler("border", color)}
    />
  ));
  return (
    <div className="font-inter flex">
      <div
        style={{ width: "226px" }}
        className="flex-0-0-a h-screen bg-column-background mr-4 lg"
      />
      <div className="flex-auto">
        <p className="text-2xl my-6">Title</p>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
          <div>
            <TopologyColumn title="zone 1" cards={cards} />
          </div>
          <div>
            <TopologyColumn title="zone 2" cards={cards} />
          </div>
          <div>
            <TopologyColumn title="zone 3" cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
};

TopologyPageMediumView.propTypes = {
  topology: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
