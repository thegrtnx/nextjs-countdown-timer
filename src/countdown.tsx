import React, { useState, useEffect } from "react";
interface CountdownTimerProps {
	initialSeconds: number;
	onTimerEnd: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds, onTimerEnd }) => {
	const [seconds, setSeconds] = useState(initialSeconds);

	useEffect(() => {
		const storedTime = parseInt(localStorage.getItem("countdownTime") || "0", 10);
		const timeToSet = storedTime > 0 ? storedTime : initialSeconds;

		setSeconds(timeToSet);
	}, [initialSeconds]);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => {
				if (prevSeconds === 0) {
					clearInterval(interval);
					onTimerEnd(); // Invoke the callback when the timer reaches zero
					return 0;
				}

				localStorage.setItem("countdownTime", String(prevSeconds - 1));
				return prevSeconds - 1;
			});
		}, 1000);

		// Cleanup the interval on component unmount
		return () => clearInterval(interval);
	}, [onTimerEnd]);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const remainingSeconds = time % 60;
		return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
	};

	return <>{formatTime(seconds)}</>;
};

export default CountdownTimer;
