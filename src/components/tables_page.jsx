import React from "react";
import { useTable } from "react-table";

const data = [
  { name: "John Doe", age: 28, role: "Developer" },
  { name: "Jane Smith", age: 34, role: "Designer" },
  { name: "Michael Brown", age: 41, role: "Manager" },
];

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Role", accessor: "role" },
];

export const TablesPage = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 p-4 rounded shadow">
      <table {...getTableProps()} className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-700">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="px-4 py-2 text-gray-600 dark:text-gray-300">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b border-gray-200 dark:border-gray-600">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
