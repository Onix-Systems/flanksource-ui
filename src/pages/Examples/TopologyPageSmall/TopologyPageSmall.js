import React, { useState } from "react";
import topology from "../../../data/topology.json";
import { TopologyPageSmallView } from "./TopologyPageSmallView";

export const TopologyPageSmall = () => {
  const [selectionMode, setSelectionMode] = useState(false);
  const [checked, setChecked] = useState({});
  const [modal, setModal] = useState(false);
  const toggleChecked = (id, checked) => {
    setChecked((prevState) => ({ ...prevState, [id]: checked }));
  };
  console.log(Object.values(checked).filter((item) => item === true).length);
  return (
    <TopologyPageSmallView
      topology={topology}
      checked={checked}
      selectionMode={selectionMode}
      setSelectionMode={setSelectionMode}
      toggleChecked={toggleChecked}
      modal={modal}
      setModal={setModal}
    />
  );
};
