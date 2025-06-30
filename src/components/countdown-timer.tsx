import React from "react";
import { Card } from "@heroui/react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div className="flex justify-center gap-4">
      <CountdownItem value={formatTime(timeLeft.days)} label="Days" />
      <CountdownItem value={formatTime(timeLeft.hours)} label="Hours" />
      <CountdownItem value={formatTime(timeLeft.minutes)} label="Minutes" />
      <CountdownItem value={formatTime(timeLeft.seconds)} label="Seconds" />
    </div>
  );
};

interface CountdownItemProps {
  value: string;
  label: string;
}

const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => {
  return (
    <div className="text-center p-2 min-w-[70px]">
      <Card className="bg-gray-50 border border-gray-200 dark:bg-content2 dark:border-default-700">
        <div className="text-3xl font-bold gradient-text py-2">{value}</div>
        <div className="text-sm text-gray-600 dark:text-default-400">{label}</div>
      </Card>
    </div>
  );
};
