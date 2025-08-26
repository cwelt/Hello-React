import { watcherService } from '../services/watcher.service.js';
const { useState, useEffect, useRef } = React;

export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);

  useEffect(() => {
    watcherService.query().then(setWatchers);
  }, []);

  return (
    <section>
      <div className="watcher-app-header">
        <h1>Watcher App</h1>
        <button className="add-watcher-btn">Add Watcher</button>
      </div>
      <ul className="watcher-app-container">
        {watchers.map(watcher => (
          <li key={watcher.id} onClick={() => setSelectedWatcher(watcher)}>
            <article className="watch-entity">
              <h2 className="watch-name">{watcher.fullname}</h2>
              <img
                className="watch-image"
                src={`https://robohash.org/${watcher.id}?set=set6`}
                alt={watcher.fullname}
              />
              <div className="watch-divider" />
              <div className="watch-actions">
                <button className="watch-btn remove">x</button>
                <button className="watch-btn select">Select</button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
