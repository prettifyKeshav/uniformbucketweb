'use client';
import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-fixedcolumns';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-fixedcolumns-dt/css/fixedColumns.dataTables.css';

export default function DataTable({ data, columns, config = {} }) {
  const tableRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth > 991;
    const table = $(tableRef.current).DataTable({
      searching: false,
      ordering: false,
      info: false,
      paging: false,
      scrollX: true,
      scrollY: 300,
      destroy: true,
      ...(isDesktop ? { fixedColumns: { start: 1 } } : {}),
      ...config,
    });

    return () => table.destroy();
  }, []);

  return (
    <table ref={tableRef} className="display" style={{ width: '100%' }}>
      <thead>
        <tr>{columns.map((col, i) => <th key={i}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, r) => (
          <tr key={r}>
            {row.map((cell, c) => <td key={c}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
