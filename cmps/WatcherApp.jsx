import { watcherService } from '../services/watcher.service.js';
const { useState, useEffect, useRef } = React;

export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);

  useEffect(() => {
    watcherService
      .query()
      .then(setWatchers)
      .catch(err => {
        console.error('Error fetching watchers:', err);
      });
  }, []);

  function handleOnRemoveWatcher(watcherId) {
    watcherService
      .remove(watcherId)
      .then(() => {
        setWatchers(watchers.filter(watcher => watcher.id !== watcherId));
      })
      .catch(err => {
        console.error(`Error removing watcher "${watcherId}" `, err);
      });
  }

  function handleOnAddWatcher() {
    const watcherFullMame = prompt('Enter full name of the watcher:');

    const watcherMoviesString = prompt(
      'Enter a list of movies separated by commas:'
    );
    const watcherMoviesArray = watcherMoviesString
      ? watcherMoviesString.split(',').map(val => val.trim())
      : [];

    const newWatcher = watcherService.getEmptyWatcher(
      watcherFullMame,
      watcherMoviesArray
    );
    watcherService
      .save(newWatcher)
      .then(savedWatcher => {
        setWatchers([...watchers, savedWatcher]);
      })
      .catch(err => {
        console.error('Error adding watcher:', err);
      });
  }

  function handleCloseModal() {
    setSelectedWatcher(null);
  }

  if (!watchers || watchers.length === 0)
    return (
      <div>
        <h1>Loading watchers...</h1>
        <img
          src="https://media.tenor.com/WX_LDjYUrMsAAAAi/loading.gif"
          alt="Loading..."
        />
      </div>
    );
  return (
    <section>
      <div className="watcher-app-header">
        <h1>Watcher App</h1>
        <button className="add-watcher-btn" onClick={handleOnAddWatcher}>
          Add Watcher
        </button>
      </div>
      <ul className="watcher-app-container">
        {watchers.map(watcher => (
          <li key={watcher.id}>
            <article className="watch-entity">
              <h2 className="watch-name">{watcher.fullname}</h2>
              <img
                className="watch-image"
                src={`https://robohash.org/${watcher.id}?set=set6`}
                alt={watcher.fullname}
              />
              <div className="watch-divider" />
              <div className="watch-actions">
                <button
                  className="watch-btn remove"
                  onClick={() => handleOnRemoveWatcher(watcher.id)}
                >
                  x
                </button>
                <button
                  className="watch-btn select"
                  onClick={() => setSelectedWatcher(watcher)}
                >
                  Select
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
      {/* Modal shown if selectedWatcher is not null */}
      {selectedWatcher && (
        <div
          className="watcher-modal-backdrop"
          onClick={handleCloseModal}
          tabIndex={-1}
        >
          <div
            className="watcher-modal"
            onClick={ev => ev.stopPropagation()}
            tabIndex={0}
          >
            <button className="modal-close-btn" onClick={handleCloseModal}>
              ×
            </button>
            <h2>{selectedWatcher.fullname}'s Movies</h2>
            <ul>
              {selectedWatcher.movies && selectedWatcher.movies.length > 0 ? (
                selectedWatcher.movies.map((movie, idx) => (
                  <li key={idx}>{movie}</li>
                ))
              ) : (
                <li>No movies listed.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
