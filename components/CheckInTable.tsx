"use client";

import React, { useEffect, useState } from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Check_In_Data_Type } from "@/lib/MOCK_DATA";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

export default function CheckInTable() {
  const [data, setData] = useState<Check_In_Data_Type[]>([]);
  useEffect(() => {
    async function getCheckIns() {
      try {
        const checkIns = await axios.get("/api/checkIns");
        setData(checkIns.data);
      } catch (err) {
        console.log("error while fetching: ", err);
      }
    }
    getCheckIns();
  }, []);
  const columns: ColumnDef<Check_In_Data_Type>[] = [
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
      accessorKey: "taskCompleted",
      header: "Learnings",
      cell: ({ row }) => (
        <div
          className="text-left max-w-xs line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: row.original.learnings,
          }}
        />
      ),
    },
    {
      accessorKey: "issues",
      header: "Issues",
      cell: ({ row }) => (
        <div
          className="text-left max-w-xs line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: row.original.issues,
          }}
        />
      ),
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
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col gap-4 flex-1">
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
                    header.getContext(),
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
