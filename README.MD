# ✨ nextjs-countdown-timer

This is a [react/nextjs-typescript](https://www.typescriptlang.org/) project created by [`Abolade Greatness`](https://github.com/thegrtnx), helping you Countdown to a time with a hook when the countdown timer reaches zero.

## 🔧 Installation

```bash
npm i nextjs-countdown-timer

```

I'll provide support for other packages with time. Happy to collaborate with anyone. 🤝

## 😍 Features

- Compatible with React.js and Next.js
- Doesn't refresh on page reload
- Customize hook when the countdown timer reaches zero
- Easy to set up for real, you can make it work in less than 10sec!
- Set custom duration with choice
- Typescript supported

## The gist

```jsx
"use client";
import React from "react";
import { CountdownTimer } from "nextjs-countdown-timer";

const App: React.FC = () => {
	const handleTimerEnd = () => {
		console.log("Timer has ended!");
		// You can add your logic here when the timer reaches zero
	};

	return (
		<div>
			<h1>React Countdown Timer</h1>
			<CountdownTimer
				initialSeconds={60}
				onTimerEnd={handleTimerEnd}
			/>
		</div>
	);
};

export default App;
```

## 🤝 Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [twitter](https://twitter.com/thegrtnx) and [Linkedin](https://www.linkedin.com/in/thegrtnx). My pseudo is [thegrtnx].

## 🤐 License

Licensed under MIT
