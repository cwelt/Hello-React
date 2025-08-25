const { useState, useEffect } = React;

export function SeasonClock() {
  const [isDark, setIsDark] = useState(true);
  const [currentTime, setCurrentTime] = useState(getSeasonDetails());

  useEffect(() => {
    // register an interval on mounting to refresh time each second
    const intervalId = setInterval(() => {
      setCurrentTime(getSeasonDetails());
    }, 1000);

    // clear interval when unmounting
    return () => clearInterval(intervalId);
  }, []);

  function getSeasonDetails() {
    let now = new Date();
    let month = now.getMonth() + 1; // Months are zero-based
    let monthName = now.toLocaleDateString('en-US', { month: 'long' });
    let dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
    let nowString = now.toLocaleTimeString();
    let seasonName = (mon => {
      if (mon >= 3 && mon <= 5) return 'Spring';
      else if (mon >= 6 && mon <= 8) return 'Summer';
      else if (mon >= 9 && mon <= 11) return 'Autumn';
      else return 'Winter';
    })(month);
    return { monthName, dayName, nowString, seasonName };
  }

  return (
    <button
      className={`season-clock ${isDark ? 'dark' : ''}`}
      onClick={() => setIsDark(!isDark)}
    >
      <h1>{isDark ? '☼' : '☀︎'}</h1>
      <h2>
        {currentTime.monthName} ({currentTime.seasonName})
      </h2>
      <img
        src={`../assets/season-imgs/${currentTime.seasonName.toLowerCase()}.png`}
        alt={currentTime.seasonName}
      />
      <h3>{currentTime.dayName}</h3>
      <h4>{currentTime.nowString}</h4>
    </button>
  );
}
