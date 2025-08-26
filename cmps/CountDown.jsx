import { utilService } from '../services/util.service.js';
export { CountDown, handleOnCountDownEnd };
const { useState, useEffect, useRef } = React;

function CountDown({ startFrom = 10, onDone = handleOnCountDownEnd, toTime }) {
  // whether user approved playing audio alarm when countdown ends
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  // init counter to either toTime, startFrom or default value
  const [timeLeft, setTimeLeft] = useState(
    toTime && toTime - Date.now() > 0
      ? Math.ceil((toTime - Date.now()) / 1000)
      : startFrom
  );

  // references for DOM elements & interval ID
  const elClock = useRef(null); // for animation of clock once countdown is over
  const elAudio = useRef(null); // for playing audio file once countdown ends
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
      onDone(elClock.current, elAudio.current, isAudioEnabled);
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
    <section className="count-down-container">
      <div ref={elClock} className="count-down-clock">
        <h2 className={timeLeft <= 6 ? 'timer-alert' : ''}>
          {hours}:{minutes}:{seconds}
        </h2>
      </div>
      <div className="count-down-audio">
        <button
          id="btnAudio"
          onClick={() => setIsAudioEnabled(!isAudioEnabled)}
          title="Click to enable/disable audio alert then countdown ends."
        >
          {isAudioEnabled ? '🔊' : '🔇'}
        </button>
        <label htmlFor="btnAudio">
          {'Click to '}
          {isAudioEnabled ? <em>disable</em> : <em>enable</em>}
          {' when countdown ends.'}
        </label>
        <audio ref={elAudio}>
          <source src="../assets/audio/alarm.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
}

function handleOnCountDownEnd(clockElement, audioElement, isAudioEnabled) {
  utilService.animateCSS(clockElement);
  if (isAudioEnabled) {
    audioElement.setAttribute('controls', 'controls');
    audioElement.play().catch(error => {
      console.error('Countdown Playback failed:', error);
    });
    audioElement.onended = () => {
      audioElement.removeAttribute('controls');
    };
  }
}
