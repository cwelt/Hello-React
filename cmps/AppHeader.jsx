const { useState } = React;

export function AppHeader({ setPageOnRoot }) {
  const [page, setPage] = useState('home');

  function onSetPage(ev, page) {
    ev.preventDefault();
    setPage(page);
    setPageOnRoot(page);
  }

  return (
    <header className="app-header full main-layout">
      <h1>React Starter Proj</h1>
      <hr />
      <section className="header-container">
        <nav>
          <a
            href=""
            className={page === 'home' ? 'active' : ''}
            onClick={ev => onSetPage(ev, 'home')}
          >
            Home
          </a>
          |
          <a
            href=""
            className={page === 'animals' ? 'active' : ''}
            onClick={ev => onSetPage(ev, 'animals')}
          >
            Animals
          </a>
          |
          <a
            href=""
            className={page === 'season-clock' ? 'active' : ''}
            onClick={ev => onSetPage(ev, 'season-clock')}
          >
            Season Clock
          </a>
          |
          <a
            href=""
            className={page === 'countdown' ? 'active' : ''}
            onClick={ev => onSetPage(ev, 'countdown')}
          >
            Countdown
          </a>
          <a
            href=""
            className={page === 'watcher-app' ? 'active' : ''}
            onClick={ev => onSetPage(ev, 'watcher-app')}
          >
            Watcher App
          </a>
        </nav>
      </section>
    </header>
  );
}
