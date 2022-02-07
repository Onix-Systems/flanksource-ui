import React, { useMemo, useState } from "react";
import Convert from "ansi-to-html";
import DOMPurify from "dompurify";
import { isArray } from "lodash";
import dayjs from "dayjs";
import { useTable } from "react-table";

export function LogsTable({ logs, actions = [] }) {
  if (!isArray(logs)) {
    logs = JSON.parse(logs);
  }
  const [selectedList, setSelectedList] = useState([]);
  const convert = new Convert();
  const handleSelect = (log, selected) => {
    if (selected) {
      setSelectedList([...selectedList, log]);
    } else {
      setSelectedList([...selectedList].filter((obj) => log !== obj));
    }
  };
  console.log(logs);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "timestamp"
      },
      {
        Header: "Info",
        accessor: "message"
      }
    ],
    []
  );
  const data = useMemo(() => logs, [logs]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data
    });
  console.log(logs);
  return (
    <>
      <div className="mx-auto flex flex-col justify-center relative">
        {actions.length > 0 && (
          <div
            className="flex justify-between items-center overflow-y-hidden mb-4"
            style={{
              maxHeight: selectedList.length > 0 ? "100px" : "0px",
              transition: "max-height 0.25s  ease-in-out"
            }}
          >
            <div>
              {selectedList.length > 0 && (
                <span className="text-sm text-gray-400">
                  {selectedList.length} selected
                </span>
              )}
            </div>

            {actions.map((action) => (
              <button
                key={action.label}
                type="button"
                disabled={!(selectedList.length > 0)}
                onClick={() => action.handler(selectedList)}
                className={`${
                  selectedList.length > 0
                    ? "text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    : "text-gray-400 bg-gray-200"
                } inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded`}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        <div className="pb-12">
          <div className="flex flex-col">
            <div className="align-middle inline-block min-w-full">
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* <table */}
              {/*  className="min-w-full divide-y divide-gray-300 border-separate" */}
              {/*  style={{ borderSpacing: "0px" }} */}
              {/* > */}
              {/*  <thead className="sticky top-0 bg-white"> */}
              {/*    <tr> */}
              {/*      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300 pr-5"> */}
              {/*        Time */}
              {/*      </th> */}
              {/*      <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300"> */}
              {/*        Message */}
              {/*      </th> */}
              {/*    </tr> */}
              {/*  </thead> */}
              {/*  <tbody */}
              {/*    className="bg-white divide-y divide-gray-300" */}
              {/*    style={{ fontSize: "0.75rem", lineHeight: "0.9rem" }} */}
              {/*  > */}
              {/*    {logs.map((row, idx) => ( */}
              {/*      // eslint-disable-next-line react/no-array-index-key */}
              {/*      <tr key={idx}> */}
              {/*        /!* {actions.length >= 0 && ( *!/ */}
              {/*        /!*  <td className="border-b border-gray-100 "> *!/ */}
              {/*        /!*    <input *!/ */}
              {/*        /!*      type="checkbox" *!/ */}
              {/*        /!*      className="focus:ring-indigo-400 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2" *!/ */}
              {/*        /!*      onChange={(e) => *!/ */}
              {/*        /!*        handleSelect(row, e.target.checked) *!/ */}
              {/*        /!*      } *!/ */}
              {/*        /!*      checked={selectedList.indexOf(row) >= 0} *!/ */}
              {/*        /!*    /> *!/ */}
              {/*        /!*  </td> *!/ */}
              {/*        /!* )} *!/ */}
              {/*        <td */}
              {/*          className="border-b border-gray-100 no-wrap py-1 flex flex-row" */}
              {/*          style={{ whiteSpace: "nowrap" }} */}
              {/*        > */}
              {/*          <input */}
              {/*            type="checkbox" */}
              {/*            className="focus:ring-indigo-400 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2" */}
              {/*            onChange={(e) => handleSelect(row, e.target.checked)} */}
              {/*            checked={selectedList.indexOf(row) >= 0} */}
              {/*          /> */}
              {/*          <p> */}
              {/*            {dayjs(row.timestamp).format( */}
              {/*              "MMM DD, YYYY HH:mm.ss.mmm" */}
              {/*            )} */}
              {/*          </p> */}
              {/*        </td> */}
              {/*        <td */}
              {/*          className="border-b border-gray-100" */}
              {/*          // eslint-disable-next-line react/no-danger */}
              {/*          dangerouslySetInnerHTML={{ */}
              {/*            __html: DOMPurify.sanitize( */}
              {/*              convert.toHtml(row.message ? row.message : "") */}
              {/*            ) */}
              {/*          }} */}
              {/*        /> */}
              {/*      </tr> */}
              {/*    ))} */}
              {/*  </tbody> */}
              {/* </table> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
