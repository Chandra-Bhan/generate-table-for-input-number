import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Create input field When you type a number on that input field immediately generate table for that number and show it on the page Suppose you typed five on input field, and without any button, click immediately generate a table for five and show it on a table and if you change the number, it should immediately change the table.

export default function App() {
  const [tableNumber, setTableNumber] = useState('');
  const [table, setTable] = useState(new Array(10).fill(0));

  const handletable = (e) => {
    let number = e.target.value;

    let tempTable = [];
    for (let i = 1; i <= 10; i++) {
      tempTable.push(i * Number(number));
    }
    setTable(tempTable);
    setTableNumber(number);
  };

  return (
    <div
      className="border p-5"
      style={{
        width: '45rem',
        margin: 'auto',
        marginTop: '1rem',
        textAlign: 'center',
      }}
    >
      <h1 className="text-primary">Generate table of a input number</h1>
      <input
        className="form-control"
        type="text"
        placeholder="Enter a number for table"
        value={tableNumber}
        onChange={handletable}
      />

      <table className="table mt-3 table-hover table-striped">
        <thead>
          <tr>
            <th>Table</th>
          </tr>
        </thead>
        <tbody>
          {table.map((num, index) => (
            <tr key={index}>
              <td>{num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
