import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import topology from "../../../data/topology.json";
import { TopologyPageSmallView } from "./TopologyPageSmallView";

export const TopologyPageSmall = () => {
  const [selectionMode, setSelectionMode] = useState(false);
  const [checked, setChecked] = useState({});
  const [modal, setModal] = useState(false);
  const toggleChecked = (id, checked) => {
    setChecked((prevState) => ({ ...prevState, [id]: checked }));
  };
  const [sendData, setSendData] = useState({});
  const topologies = [topology, topology, topology, topology, topology].map(
    (item) => item.map((data) => ({ ...data, id: uuid() }))
  );
  return (
    <TopologyPageSmallView
      topology={topology}
      checked={checked}
      selectionMode={selectionMode}
      setSelectionMode={setSelectionMode}
      toggleChecked={toggleChecked}
      modal={modal}
      setModal={setModal}
      topologies={topologies}
      setSendData={setSendData}
    />
  );
};
