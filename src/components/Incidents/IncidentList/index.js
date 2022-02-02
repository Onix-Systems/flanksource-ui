import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import cx from "clsx";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import {
  BiNoEntry,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
  CgMathEqual
} from "react-icons/all";
import responders from "../../../data/responders.json";

const IncidentStatus = {
  Open: "open",
  Closed: "closed"
};

const IncidentStatusLabel = {
  [IncidentStatus.Open]: "Open",
  [IncidentStatus.Closed]: "Closed"
};
const IncidentSeverity = {
  Low: 0,
  Normal: 1,
  High: 2,
  Blocker: 3
};
const IncidentSeverityIcon = {
  [IncidentSeverity.Low]: <BsChevronDoubleDown color="#EB391E" />,
  [IncidentSeverity.Normal]: <CgMathEqual color="#FFA90B" />,
  [IncidentSeverity.High]: <BsChevronDoubleUp color="#326CE5" />,
  [IncidentSeverity.Blocker]: <BiNoEntry color="#EC1C24" />
};

const IncidentSeverityLabel = {
  [IncidentSeverity.Low]: "Low",
  [IncidentSeverity.Normal]: "Normal",
  [IncidentSeverity.High]: "High",
  [IncidentSeverity.Blocker]: "Blocker"
};
export function IncidentList({ list, ...rest }) {
  return (
    <div className="border border-border-color rounded-md">
      <table
        className="table-fixed table-auto w-full"
        aria-label="table"
        {...rest}
      >
        <thead className="rounded-md">
          <tr className="border-b border-border-color uppercase bg-column-background rounded-t-md items-center">
            <th
              className="px-6 py-3 text-medium-gray font-medium text-xs col-span-2 text-left"
              colSpan={2}
            >
              Name
            </th>
            <th className="px-3 py-3 text-medium-gray font-medium text-xs text-left">
              Severity
            </th>
            <th className="px-3 py-3 text-medium-gray font-medium text-xs text-left">
              Status
            </th>
            <th className="px-3 py-3 text-medium-gray font-medium text-xs text-left">
              Age
            </th>
            <th
              className="px-3 py-3 text-medium-gray font-medium text-xs col-span-2 text-left"
              colSpan={2}
            >
              Responders
            </th>
          </tr>
        </thead>
        <tbody className="flex-1 overflow-y-auto">
          {list.map((incident) => (
            <IncidentItem incident={incident} key={uuid()} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IncidentItem({ incident }) {
  const { title, id, created_at: createdAt, severity, status } = incident;
  const age = dayjs(createdAt).fromNow();
  const navigate = useNavigate();
  const navigateToIncidentDetails = (id) => {
    navigate(`/incidents/${id}`);
  };

  const statusLabel = useMemo(
    () => IncidentStatusLabel[status] ?? status,
    [status]
  );
  const severityLabel = useMemo(
    () => IncidentSeverityLabel[severity] ?? severity,
    [severity]
  );
  const severityIcon = useMemo(
    () => IncidentSeverityIcon[severity] ?? severity,
    [severity]
  );
  const statusColorClass = cx({
    "bg-light-green": status === IncidentStatus.Open,
    "bg-gray-100": status === IncidentStatus.Closed
  });

  return (
    <tr
      className="last:border-b-0 border-b cursor-pointer"
      onClick={() => navigateToIncidentDetails(id)}
    >
      <td
        colSpan={2}
        className="px-6 py-4 text-darker-black col-span-2 text-sm leading-5 font-medium"
      >
        {title}
      </td>
      <td className="px-3 py-3">
        <div className="flex flex-row items-center">
          {severityIcon}
          <p className="text-darker-black text-sm leading-5 font-normal ml-2.5">
            {severityLabel}
          </p>
        </div>
      </td>
      <td className="px-3 py-4">
        <button
          className={cx(
            "text-light-black text-xs leading-4 font-medium py-0.5 px-2.5 rounded-10px",
            statusColorClass || "bg-blue-100"
          )}
          type="button"
        >
          {statusLabel}
        </button>
      </td>
      <td className="px-3 text-medium-gray text-sm py-4">{age}</td>
      <td className="px-3 text-sm py-4" colSpan={2}>
        <div className="flex">
          {responders.map(({ image, name }) => (
            <div
              className="flex flex-row mr-4 items-center justify-between"
              key={name}
            >
              <img
                className="h-6 w-6 rounded-full bg-gray-400"
                src={image}
                alt=""
              />
              <p className="ml-1 text-sm text-dark-gray font-normal">{name}</p>
            </div>
          ))}
        </div>
      </td>
    </tr>
  );
}
