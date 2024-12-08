"use client";

import React from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  RowData,
  flexRender,
} from "@tanstack/react-table";
import { Pagination, PaginationParams } from "@/types/pagination";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRow,
} from "@/components/table";

type DataGridProps<T extends RowData> = {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  pagination?: Pagination;
  onPaginate?: (params: PaginationParams) => void;
  className?: string;
};

export function DataGrid<T extends RowData>(props: DataGridProps<T>) {
  const { data, columns, className } = props;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={cn("grid max-w-full grid-cols-1 overflow-auto", className)}>
      <Table className="w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableColumnHeaderCell key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableColumnHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
