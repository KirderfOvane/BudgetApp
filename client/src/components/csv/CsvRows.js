import React from 'react';

function CsvRows({ col, row }) {
  return (
    <button className=' csvrows__flex'>
      {row[col]}
      {/*  {col[1]} */}
    </button>
  );
}

export default CsvRows;