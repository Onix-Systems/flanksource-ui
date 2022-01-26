import React, { useState } from "react";
import { TopologySelectorModalPageView } from "./TopologySelectorModalPageView";
import { topologies } from "../../../data/topologies";

const topology = topologies();
export const TopologySelectorModalPage = () => {
  const [modal, setModal] = useState(false);
  const [sendData, setSendData] = useState({});
  return (
    <TopologySelectorModalPageView
      modal={modal}
      setModal={setModal}
      topologies={topology}
      setSendData={setSendData}
    />
  );
};
