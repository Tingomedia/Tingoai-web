import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const targetDate = new Date("2024-12-01T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper function to determine pluralization, ensuring 0 is plural
  const formatUnit = (value: number, unit: string) => {
    return `${unit}${value <= 1 ? '' : 's'}`;
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 place-items-center animate-fadeInDrop1">
        <div className="border flex flex-col rounded-lg w-32"> {/* Fixed width */}
          <h3 className="bg-secondary text-fade-white font-bold text-6xl py-4 rounded-lg rounded-b-none">
            {timeLeft.days}
          </h3>
          <span className="p-2 font-semibold">{formatUnit(timeLeft.days, 'Day')}</span>
        </div>
        <div className="border flex flex-col rounded-lg w-32"> {/* Fixed width */}
          <h3 className="bg-secondary text-fade-white font-bold text-6xl py-4 rounded-lg rounded-b-none">
            {timeLeft.hours}
          </h3>
          <span className="p-2 font-semibold">{formatUnit(timeLeft.hours, 'Hour')}</span>
        </div>
        <div className="border flex flex-col rounded-lg w-32"> {/* Fixed width */}
          <h3 className="bg-secondary text-fade-white font-bold text-6xl py-4 rounded-lg rounded-b-none">
            {timeLeft.minutes}
          </h3>
          <span className="p-2 font-semibold">{formatUnit(timeLeft.minutes, 'Minute')}</span>
        </div>
        <div className="border flex flex-col rounded-lg w-32"> {/* Fixed width */}
          <h3 className="bg-secondary text-fade-white font-bold text-6xl py-4 rounded-lg rounded-b-none">
            {timeLeft.seconds}
          </h3>
          <span className="p-2 font-semibold">{formatUnit(timeLeft.seconds, 'Second')}</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
