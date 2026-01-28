"use client"

import React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { MOCK_DATA, MOCK_DATA_TYPE } from "@/lib/MOCK_DATA";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CheckInTable() {
  const columns: ColumnDef<MOCK_DATA_TYPE>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "check_in_date",
      header: "Check In Date",
    },
    {
      accessorKey: "language",
      header: "Language",
    },
    {
      accessorKey: "learnings",
      header: "Learnings",
    },
    {
      accessorKey: "issues",
      header: "Issues",
    },
    {
      accessorKey: "links",
      header: "Links",
      cell: ({ row }) => (
        <a
          href={row.original.links}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          Open
        </a>
      ),
    },
  ];

  const table = useReactTable({
    data: MOCK_DATA,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col gap-4">
      <table className="w-full">
        <thead className="bg-[#5c37eb] text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="cursor-pointer border border-white px-6 py-2"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                  <td
                  key={cell.id}
                  className="border p-2 text-center"
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowBackIosIcon />
        </button>

        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
            <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
    
  );
}
