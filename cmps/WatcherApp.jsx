import { watcherService } from '../services/watcher.service.js';
const { useState, useEffect, useRef } = React;

export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);

  useEffect(() => {
    watcherService.query().then(setWatchers);
  }, []);

  return (
    <div>
      <section>
        <h1>Watcher App</h1>
        <button>Add Watcher</button>
        <ul>
          {watchers.map(watcher => (
            <li key={watcher.id} onClick={() => setSelectedWatcher(watcher)}>
              <article>
                {watcher.fullname}
                <img
                  src={`https://robohash.org/${watcher.id}?set=set6`}
                  alt={watcher.fullname}
                />
                <button>x</button>
                <button>Select</button>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
