import { FolderIcon, HomeIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { ImLifebuoy } from "react-icons/im";
import { VscJson } from "react-icons/vsc";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import { getUser } from "./api/auth";
import { SidebarLayout } from "./components/Layout";
import { Loading } from "./components/Loading";
import { TraceView } from "./components/Traces";
import { AuthContext } from "./context";
import {
  ConfigDetailsPage,
  ConfigListPage,
  IncidentCreatePage,
  IncidentDetailsPage,
  IncidentListPage,
  LogsPage,
  TimelinePage,
  TopologyPage
} from "./pages";
import { DropdownDemoPage } from "./pages/Examples/dropdown-demo";
import { ModalPage } from "./pages/Examples/Modal/modal-page";
import { TypologyDropdownDemo } from "./pages/Examples/topology-dropdown";
import { RsDemoPage } from "./pages/Examples/rs-demo";
import { TopologyPage as ExamplesTopologyPage } from "./pages/Examples/Topology/topology-page";
import { TopologySelectorModalPage } from "./pages/Examples/TopologySelectorModalPage/TopologySelectorModalPage";
import { HealthPage } from "./pages/health";
import { Examples, ExamplesIndex } from "./pages/Examples/Examples";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true
    }
  }
});

const navigation = [
  {
    name: "Topology",
    href: "/",
    icon: HomeIcon,
    current: false
  },
  {
    name: "Health",
    href: "/health",
    icon: AiFillHeart,
    current: false
  },
  { name: "Logs", href: "/logs", icon: FolderIcon, current: false },
  // { name: "Metrics", href: "/metrics", icon: VscGraph, current: false },
  // { name: "Traces", href: "/traces", icon: FaProjectDiagram, current: false },
  { name: "Config", href: "/config", icon: VscJson, current: false },
  // {
  //   name: "Timeline",
  //   href: "/timeline",
  //   icon: MdTimeline,
  //   current: false
  // },
  {
    name: "Incidents",
    href: "/incidents",
    icon: ImLifebuoy
  }
];

const examplesArr = [
  { path: "rs", component: <RsDemoPage /> },
  { path: "dropdown", component: <DropdownDemoPage /> },
  { path: "topology", component: <ExamplesTopologyPage url="/canary/api" /> },
  {
    path: "topology-selector",
    component: <TopologySelectorModalPage url="/canary/api" />
  },
  { path: "modal", component: <ModalPage /> },
  { path: "topology-dropdown", component: <TypologyDropdownDemo /> }
];

export function Placeholder({ text }) {
  return (
    <div className="py-4">
      <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg">
        {text}
      </div>
    </div>
  );
}

export function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then((u) => {
      setUser(u);
    });
  }, []);
  if (user == null) {
    return <Loading text="Logging in" />;
  }

  const sidebar = <SidebarLayout navigation={navigation} />;
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={user}>
        <Routes>
          <Route path="/" element={sidebar}>
            <Route index element={<Navigate to="/topology" />} />
            <Route path="incidents" element={<IncidentListPage />} />
            <Route path="incidents/:id" element={<IncidentDetailsPage />} />
            <Route path="incidents/create" element={<IncidentCreatePage />} />
            <Route path="health" element={<HealthPage url="/canary/api" />} />
            <Route
              path="topology"
              element={<TopologyPage url="/canary/api" />}
            />
            <Route
              path="topology/:id"
              element={<TopologyPage url="/canary/api" />}
            />
            <Route path="logs" element={<LogsPage />} />
            <Route path="config" element={<ConfigListPage />} />
            <Route path="config/:id" element={<ConfigDetailsPage />} />
            <Route path="timeline" element={<TimelinePage />} />
            <Route path="metrics" element={<Placeholder text="metrics" />} />
            <Route path="traces" element={<TraceView />} />
            <Route path="examples" element={<Examples />}>
              <Route index element={<ExamplesIndex examples={examplesArr} />} />
              {examplesArr.map((el) => (
                <Route path={el.path} element={el.component} key={el.path} />
              ))}
            </Route>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
