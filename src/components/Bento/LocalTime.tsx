import { useEffect, useState } from "react";

const format = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Baku",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

const LocalTime = () => {
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time}</span>;
};

export default LocalTime;
