const { useState } = React;

import { AnimalList } from './cmps/AnimalList.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { CountDown } from './cmps/CountDown.jsx';
import { Home } from './cmps/Home.jsx';
import { SeasonClock } from './cmps/SeasonClock.jsx';
import { WatcherApp } from './cmps/WatcherApp.jsx';

export function RootCmp() {
  const [page, setPage] = useState('home');
  return (
    <section className="app main-layout">
      <AppHeader setPageOnRoot={setPage} />
      <main>
        {page === 'home' && <Home />}
        {page === 'animals' && <AnimalList />}
        {page === 'season-clock' && <SeasonClock />}
        {page === 'countdown' && <CountDown />}
        {page === 'watcher-app' && <WatcherApp />}
      </main>
    </section>
  );
}
