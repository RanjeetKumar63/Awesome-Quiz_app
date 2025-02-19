import { useState, useEffect } from "react";
import "./App.css";

const QuizTimer = ({ onTimeUp }) => {
  const totalTime = 30 * 60; // 30 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp(); // Auto-submit or handle time-up scenario
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return <div className="time">Time Left: {formatTime(timeLeft)}</div>;
};

export default QuizTimer;
