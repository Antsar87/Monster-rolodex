import React from 'react';
import './Card-list.css';
import Card from '../card/Card';

function Cardlist(props) {
  let busqueda = props.monster;

  if (props.search) {
    busqueda = props.monster.filter((monster) =>
      monster.name.toLowerCase().includes(props.search.toLowerCase())
    );
    console.log(busqueda);
  }

  return (
    <div className="card-list">
      {busqueda.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default Cardlist;
