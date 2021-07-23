import React from 'react';
import './search-box.css';

function Searchbox({ placeholder, handler }) {
  return (
    <>
      <input className="search" type="search" placeholder={placeholder} onChange={handler} />
    </>
  );
}

export default Searchbox;
