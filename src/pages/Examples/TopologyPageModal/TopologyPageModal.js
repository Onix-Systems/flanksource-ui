import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { TopologyPageModalView } from "./TopologyPageModalView";
import topology from "../../../data/topology.json";

export const TopologyPageModal = () => {
  const [modal, setModal] = useState(false);
  const [sendData, setSendData] = useState({});
  const topologies = [topology, topology, topology, topology, topology].map(
    (item) => item.map((data) => ({ ...data, id: uuid() }))
  );
  return (
    <TopologyPageModalView
      modal={modal}
      setModal={setModal}
      topologies={topologies}
      setSendData={setSendData}
    />
  );
};
