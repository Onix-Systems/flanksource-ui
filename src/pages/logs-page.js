import { SearchIcon } from "@heroicons/react/solid";
import { debounce } from "lodash";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { getLogs } from "../api/services/logs";
import { Dropdown } from "../components/Dropdown";
import { timeRanges } from "../components/Dropdown/TimeRange";
import { LogsViewer } from "../components/Logs";
import { TextInput } from "../components/TextInput";
import { SearchLayout } from "../components/Layout"

export function LogsPage() {
  const [logsIsLoading, setLogsIsLoading] = useState(true);
  const [logs, setLogs] = useState([]);
  const loadLogs = () => {
    console.log("loading")
    setLogsIsLoading(true);
    getLogs().then((res) => {
      if (res.data != null) {
        setLogs(res.data.results);
      }
      setLogsIsLoading(false);
    });
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const [searchIsDirty, setSearchIsDirty] = useState(false);
  const {
    control,
    watch,
    formState: { isDirty }
  } = useForm({
    defaultValues: {
      timeRange: timeRanges[0].value,
      searchQuery: ""
    }
  });

  const handleSearch = (searchQuery, timeRange) => {
    console.log("search", searchQuery, timeRange);
    // Call search API & update logs list here
  };

  const handleSearchDebounced = useRef(debounce(handleSearch, 700)).current;

  const watchTimeRange = watch("timeRange");
  const watchSearchQuery = watch("searchQuery");

  useEffect(() => {
    if (searchIsDirty) {
      handleSearchDebounced(watchSearchQuery, watchTimeRange);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchSearchQuery, searchIsDirty]);

  useEffect(() => {
    if (searchIsDirty) {
      handleSearch(watchSearchQuery, watchTimeRange);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchTimeRange, searchIsDirty]);

  useEffect(() => {
    setSearchIsDirty(true);
  }, [isDirty]);

  return (
    <SearchLayout
      title={<div><h1 className="text-xl font-semibold">Logs</h1></div>}
      onRefresh={loadLogs}
      extra={
        <>
          <div className="mr-4 w-72 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <Controller
              control={control}
              name="searchQuery"
              render={({ field }) => {
                const { onChange, value } = field;
                return (
                  <TextInput
                    placeholder="Search"
                    className="pl-10 pb-2.5 w-full"
                    style={{ height: "38px" }}
                    id="searchQuery"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />
          </div>
          <Dropdown
            control={control}
            name="timeRange"
            className="w-44"
            items={timeRanges}
          />
        </>
      }
    >
      <LogsViewer logs={logs} isLoading={logsIsLoading} />
    </SearchLayout>
  );
}
