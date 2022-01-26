import { v4 as uuid } from "uuid";
import topology from "./topology.json";

export const topologies = () =>
  Array(5)
    .fill(topology)
    .map((topologyItem) =>
      topologyItem.map((data) => ({ ...data, id: uuid() }))
    );
