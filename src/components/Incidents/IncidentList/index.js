import { Link } from "react-router-dom";
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
  const { title, id, description, severity, status, type } = incident;
  return (
    <Link to={`/incidents/${id}`} {...rest}>
      <div className="px-6 py-3 grid grid-cols-7 items-center">
        <div className="text-gray-900 col-span-2 text-sm leading-5 font-medium">
          Incident name
        </div>
        <div className="flex flex-row items-center">
          <Icon name="caretDoubleUp" />
          <p className="text-gray-900 text-sm leading-5 font-normal ml-3">
            High
          </p>
        </div>
        <div>
          <button
            className="bg-light-green text-gray-800 text-xs leading-4 font-medium py-0.5 px-2.5 rounded-10px"
            type="button"
          >
            Active
          </button>
        </div>
        <div className="text-gray-400 text-sm">3 days</div>
        <div className="text-gray-400 text-sm col-span-2 flex flex-row">
          <div className="flex flex-row mr-4 items-center">
            <img
              className="h-6 w-6 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
            />
            <p className="ml-1 text-sm">John Ower</p>
          </div>
          <div className="flex flex-row  mr-4 items-center">
            <img
              className="h-6 w-6 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
            />
            <p className="ml-1 text-sm">John Werker</p>
          </div>
        </div>
        {/* <div className="text-gray-400 text-sm">type: {type}</div> */}
      </div>
    </Link>
  );
}
