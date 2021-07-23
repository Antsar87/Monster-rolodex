import React, { useState } from 'react';
import Cardlist from './components/card-list/Card-list';
import Searchbox from './components/search-box/Search-box';
import './App.css';

function App() {
  const monster = [];

  const [texto, settexto] = useState(monster);
  const [search, setsearch] = useState();

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    settexto(users);
  };

  const cambio = (e) => {
    setsearch(e.target.value);
  };
  return (
    <div className="App">
      <h1>Monster rolodex</h1>
      <Searchbox placeholder="search monsters" handler={cambio} />
      <Cardlist monster={texto} search={search} />
    </div>
  );
}

export default App;
