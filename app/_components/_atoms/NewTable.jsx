import React, { useMemo } from "react";
import { useTable } from "react-table";
import jsPDF from "jspdf";
import 'jspdf-autotable';

const NewTable = ({ data, dataDescription }) => {
  const columns = useMemo(
    () => dataDescription.map(column => ({
      Header: column.label,
      accessor: column.accessor,
      Cell: ({ value }) => {
        // Eğer value bir nesne ise JSON string olarak render edin
        if (typeof value === "object" && value !== null) {
          return JSON.stringify(value);
        }
        return value;
      }
    })),
    [dataDescription]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const exportPDF = () => {
    const doc = new jsPDF();

    const tableColumn = columns.map(column => column.Header);
    const tableRows = [];

    rows.forEach(row => {
      prepareRow(row);
      const rowData = row.cells.map(cell => {
        if (typeof cell.value === "object" && cell.value !== null) {
          return JSON.stringify(cell.value);
        }
        return cell.value;
      });
      tableRows.push(rowData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("table.pdf");
  };

  return (
    <div>
      <button onClick={exportPDF}>Export to PDF</button>
      <table id="my-table" {...getTableProps()} style={{ border: 'solid 1px black' }}>
        <thead>
          {headerGroups.map((headerGroup, headerIndex) => (
            <tr key={headerIndex} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th key={columnIndex} {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr key={rowIndex} {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}>
                    {cell.render('Cell')}
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

export default NewTable;
