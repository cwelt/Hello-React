const { useState, useEffect, useRef } = React;

export function CountDown({ startFrom, onDone, toTime }) {
  //init counter to either toTime or startFrom
  const [timeLeft, setTimeLeft] = useState(
    toTime && toTime - Date.now() > 0
      ? Math.ceil((toTime - Date.now()) / 1000)
      : startFrom
  );

  console.log(timeLeft, 'timeLeft');
  console.log(toTime, 'toTime');

  const elClock = useRef(null); // for animation of clock once countdown is over
  const intervalIdRef = useRef(null); // for clearing interval once countdown ends

  // set interval on mount to initialize countdown
  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    // clear interval when component unmounts
    return () => clearInterval(intervalIdRef.current);
  }, []);

  // monitor countdown and handle countdown end
  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalIdRef.current);
      onDone(elClock.current);
    }
  }, [timeLeft]);

  // compute hours, minutes, seconds
  let hours = Math.floor(timeLeft / 3600);
  let minutes = Math.floor((timeLeft % 3600) / 60);
  let seconds = timeLeft % 60;

  // pad hours, minutes & seconds with zeros to format them as HH:MM:SS
  [hours, minutes, seconds] = [hours, minutes, seconds].map(num =>
    num.toString().padStart(2, '0')
  );

  return (
    <section ref={elClock} className="count-down">
      <h2>Countdown Timer</h2>
      <h2 className={timeLeft <= 6 ? 'timer-alert' : ''}>
        {hours}:{minutes}:{seconds}
      </h2>
    </section>
  );
}
