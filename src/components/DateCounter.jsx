import React, { useEffect, useState } from 'react';

const DateCounter = () => {
  // 24 hours in seconds (86400 seconds)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    // Start the countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          // Reset to 24 hours when the countdown reaches 0
          return 24 * 60 * 60;
        }
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time left as HH:MM:SS
  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className='text-white text-[12px] py-1 rounded-full bg-gradient-to-r from-yellow-500 to-chilliRed w-[140px] flex justify-center'>
      <p className='font-semibold'><span>Ends in </span>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default DateCounter;
