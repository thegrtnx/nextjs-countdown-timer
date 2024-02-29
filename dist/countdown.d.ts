import React from "react";
interface CountdownTimerProps {
    initialSeconds: number;
    onTimerEnd: () => void;
}
declare const CountdownTimer: React.FC<CountdownTimerProps>;
export default CountdownTimer;
