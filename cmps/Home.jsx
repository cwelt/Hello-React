const { useState, useEffect } = React;

import { AnimalList } from './AnimalList.jsx';

export function Home() {
  return (
    <section className="home">
      <h2>Home Sweet Home</h2>
      <AnimalList />
    </section>
  );
}
