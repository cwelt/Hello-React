const { useState } = React;

export function SeasonClock() {
  let now = new Date();
  let month = now.getMonth() + 1; // Months are zero-based
  let monthName = now.toLocaleDateString('en-US', { month: 'long' });
  let dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  let seasonName = (mon => {
    if (mon >= 3 && mon <= 5) return 'Spring';
    else if (mon >= 6 && mon <= 8) return 'Summer';
    else if (mon >= 9 && mon <= 11) return 'Autumn';
    else return 'Winter';
  })(month);

  return (
    <div className={`season-clock`}>
      <h2>
        {monthName} ({seasonName})
      </h2>
      <img
        src={`../assets/season-imgs/${seasonName.toLowerCase()}.png`}
        alt={seasonName}
      />
      <h3>{dayName}</h3>
    </div>
  );
}
