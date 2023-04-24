import React, { useState, useEffect } from "react";

export const CountdownTimer = () => {
	const [timeLeft, setTimeLeft] = useState(5933); // in seconds

	useEffect(() => {
		let timer = setInterval(() => {
			setTimeLeft((timeLeft) => {
				if (timeLeft > 0) {
					return timeLeft - 1;
				} else {
					return 5933; // restart the countdown
				}
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const hours = Math.floor(timeLeft / 3600);
	const minutes = Math.floor((timeLeft % 3600) / 60);
	const seconds = timeLeft % 60;
	return (
		<div>
			<p>
				Time Left: {hours.toString().padStart(2, "0")}h :{" "}
				{minutes.toString().padStart(2, "0")}m :{" "}
				{seconds.toString().padStart(2, "0")}s
			</p>
		</div>
	);
};
