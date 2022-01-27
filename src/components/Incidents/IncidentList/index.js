import { Link } from "react-router-dom";
import cx from "clsx";
import dayjs from "dayjs";
import { Icon } from "../../Icon";

export function IncidentList({ list, ...rest }) {
  return (
    <div className="border border-gray-300 rounded-md" {...rest}>
      <div className="px-6 py-3 grid grid-cols-7 gap-0 border-b border-gray-300 uppercase bg-lightest-gray rounded-t-md">
        <div className="text-gray-800 text-xs col-span-2">Name</div>
        <div className="text-gray-400 text-xs">Severity</div>
        <div className="text-gray-400 text-xs">Status</div>
        <div className="text-gray-400 text-xs">Age</div>
        <div className="text-gray-400 text-xs col-span-2">Responders</div>
      </div>
      {list.map((incident) => (
        <div key={incident.id} className="last:border-b-0 border-b">
          <IncidentItem incident={incident} />
        </div>
      ))}
    </div>
  );
}

function IncidentItem({ incident, ...rest }) {
  const { title, id, created_at: createdAt, severity, status } = incident;

  const getAge = () => {
    const now = dayjs();
    let date;
    const create = dayjs(createdAt);
    if (now.diff(create, "day") <= 31) {
      date = `${now.diff(create, "day")} days`;
    } else if (now.diff(create, "month") <= 12) {
      date = `${now.diff(create, "month")} month`;
    } else if (now.diff(create, "month" > 12)) {
      date = `${now.diff(create, "year")} year`;
    }
    return date;
  };
  return (
    <Link to={`/incidents/${id}`} {...rest}>
      <div className="px-6 py-3 grid grid-cols-7 items-center">
        <div className="text-gray-900 col-span-2 text-sm leading-5 font-medium">
          {title}
        </div>
        <div className="flex flex-row items-center">
          <Icon name="caretDoubleUp" />
          <p className="text-gray-900 text-sm leading-5 font-normal ml-3">
            {severity === 2 ? "High" : "Low"}
          </p>
        </div>
        <div>
          <button
            className={cx(
              "text-gray-800 text-xs leading-4 font-medium py-0.5 px-2.5 rounded-10px",
              status === "Open" ? "bg-light-green" : "bg-gray-100"
            )}
            type="button"
          >
            {status === "Open" ? "Active" : "Resolved"}
          </button>
        </div>
        <div className="text-gray-400 text-sm">{getAge()}</div>
        <div className="text-gray-400 text-sm col-span-2 flex flex-row">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
              name: "John Ower"
            },
            {
              image:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
              name: "John Werker"
            }
          ].map(({ image, name }) => (
            <div className="flex flex-row mr-4 items-center" key={name}>
              <img
                className="h-6 w-6 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                src={image}
                alt=""
              />
              <p className="ml-1 text-sm">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
