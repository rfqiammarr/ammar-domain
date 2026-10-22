import { useEffect, useState } from "react";

const timeFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Jakarta",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export default function JakartaClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="clock-pill" aria-label="Current time in Jakarta">
      <span className="clock-dot" aria-hidden="true" />
      <span className="clock-city">Jakarta</span>
      <span className="clock-divider" aria-hidden="true" />
      <time className="clock-time" dateTime={now.toISOString()}>
        {timeFormat.format(now)}
      </time>
      <span className="clock-zone">WIB</span>
    </div>
  );
}
