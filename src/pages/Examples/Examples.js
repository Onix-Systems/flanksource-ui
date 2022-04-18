import { Link, Outlet } from "react-router-dom";
import { SearchLayout } from "../../components/Layout";

export const Examples = () => <Outlet />;

export const ExamplesIndex = ({ examples }) => (
  <SearchLayout>
    <div>Choose example</div>
    <div>
      {examples.map((el) => (
        <div key={el.path}>
          <Link to={el.path}>{el.path}</Link>
        </div>
      ))}
    </div>
  </SearchLayout>
);
