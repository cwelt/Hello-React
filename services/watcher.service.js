import { utilService } from './util.service.js';
import { storageService } from './async-storage.service.js';

const WATCHER_KEY = 'WatcherDB';
_createWatchers();

export const watcherService = {
  query,
  get,
  remove,
  save,
  getEmptyWatcher,
  getDefaultFilter,
};

// For Debug (easy access from console):
// window.ws = watcherService

function query(filterBy = {}) {
  return storageService.query(WATCHER_KEY).then(watchers => {
    if (filterBy.txt) {
      const regExp = new RegExp(filterBy.txt, 'i');
      watchers = watchers.filter(watcher => regExp.test(watcher.fullname));
    }

    if (filterBy.movie) {
      const regExp = new RegExp(filterBy.movie, 'i');
      watchers = watchers.filter(watcher =>
        regExp.test(watcher.movies.join(','))
      );
    }

    return watchers;
  });
}

function get(watcherId) {
  return storageService.get(WATCHER_KEY, watcherId);
}

function remove(watcherId) {
  return storageService.remove(WATCHER_KEY, watcherId);
}

function save(watcher) {
  if (watcher.id) {
    return storageService.put(WATCHER_KEY, watcher);
  } else {
    return storageService.post(WATCHER_KEY, watcher);
  }
}

function getEmptyWatcher(fullname = '', movies = []) {
  return { fullname, movies: [...movies] };
}

function getDefaultFilter(filterBy = { txt: '', movie: '' }) {
  return { txt: filterBy.txt, movie: filterBy.movie };
}

function _createWatchers() {
  let watchers = utilService.loadFromStorage(WATCHER_KEY);
  if (!watchers || !watchers.length) {
    watchers = [];
    const names = [
      'Freddie Mercury',
      'David Bowie',
      'Steven Tyler',
      'Robert Plant',
      'Mick Jagger',
      'Stevie Nicks',
      'Ozzy Osbourne',
      'Eric Clapton',
      'Bruce Springsteen',
      'David Gilmour',
    ];
    const movies = [
      'The Shawshank Redemption',
      'The Godfather',
      'The Dark Knight',
      'The Godfather Part II',
      '12 Angry Men',
      'The Lord of the Rings: The Return of the King',
      "Schindler's List",
      'Pulp Fiction',
      'The Lord of the Rings: The Fellowship of the Ring',
      'The Good, the Bad and the Ugly',
      'Forrest Gump',
      'The Lord of the Rings: The Two Towers',
      'Fight Club',
      'Inception',
      'Star Wars: Episode V – The Empire Strikes Back',
      'The Matrix',
      'Goodfellas',
      'Interstellar',
      "One Flew Over the Cuckoo's Nest",
      'Se7en',
      "It's a Wonderful Life",
      'The Silence of the Lambs',
      'Seven Samurai',
      'Saving Private Ryan',
      'The Green Mile',
      'City of God',
      'Life Is Beautiful',
      'Terminator 2: Judgment Day',
      'Star Wars: Episode IV – A New Hope',
      'Back to the Future',
    ];

    watchers = names.map(name => {
      const watcherMoviesSet = new Set();
      for (let i = 0; i < 6; i++)
        watcherMoviesSet.add(
          movies[utilService.getRandomIntInclusive(0, movies.length - 1)]
        );
      const watcherMoviesList = [...watcherMoviesSet];
      return _createWatcher(name, watcherMoviesList);
    });

    utilService.saveToStorage(WATCHER_KEY, watchers);
  }
}

function _createWatcher(name, movies = []) {
  const watcher = getEmptyWatcher(name, movies.slice());
  watcher.id = utilService.makeId();
  return watcher;
}
