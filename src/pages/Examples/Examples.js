import { Link, Outlet } from "react-router-dom";
import { SearchLayout } from "../../components/Layout";

export const Examples = () => <Outlet />;

export const ExamplesIndex = ({ examples }) => (
  <SearchLayout title="Example page">
    <div className="mb-4 font-semibold text-lg">Choose example</div>
    <div>
      {examples.map((el) => (
        <Link to={el.path} key={el.path}>
          <div className="p-2 my-1 bg-blue-200 hover:bg-blue-300 cursor-pointer">
            {el.path}
          </div>
        </Link>
      ))}
    </div>
  </SearchLayout>
);
