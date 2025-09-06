import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-10-05T00:00:00"); // MM/DD/YYYY format

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds) {
    return (
      <p className="text-2xl font-bold text-red-600 mt-6">
        The event has started! 🎉
      </p>
    );
  }

  return (
    <div className="mt-10 flex justify-center gap-6 text-center">
      <div>
        <p className="text-4xl font-bold text-green-600">{timeLeft.days}</p>
        <p className="text-black">Days</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-green-600">{timeLeft.hours}</p>
        <p className="text-black">Hours</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-green-600">{timeLeft.minutes}</p>
        <p className="text-black">Minutes</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-green-600">{timeLeft.seconds}</p>
        <p className="text-black">Seconds</p>
      </div>
    </div>
  );
}
