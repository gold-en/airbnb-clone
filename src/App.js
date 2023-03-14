import React from 'react';
import './App.css';
import { Navbar, Hero, Card } from './components';
import data from './data';

// const cards = data.map(data => <Card key={data.id} {...data} />);
const cards = data.map(data => <Card key={data.id} item={data} />);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
};

export default App;
