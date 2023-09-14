
'use client'
import React, { useEffect, useState } from 'react';

const Timer = ({ setting, onTimeUp }) => {
  const [count, setCount] = useState(3);
  const [mainCount, setMainCount] = useState(setting * 60); // Convert minutes to seconds
  const [startMain, setStartMain] = useState(false);

  // Helper function to format time in 00:00:00
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000);
    } else if (count === 0) {
      setStartMain(true);
    }
  }, [count]);

  useEffect(() => {
    if (startMain) {
      if (mainCount > 0) {
        setTimeout(() => setMainCount(mainCount - 1), 1000);
      } else {
        onTimeUp();
      }
    }
  }, [startMain, mainCount]);

  return (
    <div>
      {!startMain ? (
        <p>Starting in {count}</p>
      ) : (
        <p>Time remaining: {formatTime(mainCount)}</p>
      )}
    </div>
  );
};

export default Timer;
