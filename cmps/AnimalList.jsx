const animalsDemoData = [
  { type: 'Malayan Tiger', count: 787 },
  { type: 'Mountain Gorilla', count: 212 },
  { type: 'Fin Whale', count: 28 },
];

export function AnimalList({ animalInfos = animalsDemoData }) {
  return (
    <div className="animal-list">
      <table>
        <caption>Rare Animals</caption>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Count</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {animalInfos.map(animal => (
            <tr key={animal.type}>
              <th scope="row">{animal.type}</th>
              <td>{animal.count}</td>
              <td>
                <a
                  target="_blank"
                  href={`https://www.google.com/search?q=${animal.type}`}
                >
                  Search
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Total</th>
            <td colSpan={2}>
              {animalInfos.reduce((acc, animal) => acc + animal.count, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
