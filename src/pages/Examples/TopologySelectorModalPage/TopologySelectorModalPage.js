import React, { useState } from "react";
import { TopologySelectorModalPageView } from "./TopologySelectorModalPageView";
import { topologiesFactory } from "../../../data/topologies";

const topologies = topologiesFactory(5, 4);

export const TopologySelectorModalPage = () => {
  const [modal, setModal] = useState(false);

  return (
    <TopologySelectorModalPageView
      modal={modal}
      setModal={setModal}
      topologies={topologies}
    />
  );
};
