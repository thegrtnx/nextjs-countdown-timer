"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const CountdownTimer = ({ initialSeconds, onTimerEnd }) => {
    const isClient = typeof window !== "undefined";
    const storedTime = isClient ? localStorage.getItem("countdownTime") : null;
    const [seconds, setSeconds] = (0, react_1.useState)(storedTime ? Number(storedTime) : initialSeconds);
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    clearInterval(interval);
                    onTimerEnd(); // Invoke the callback when the timer reaches zero
                    return 0;
                }
                if (isClient) {
                    localStorage.setItem("countdownTime", String(prevSeconds - 1));
                }
                return prevSeconds - 1;
            });
        }, 1000);
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [initialSeconds, onTimerEnd, isClient]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };
    return react_1.default.createElement(react_1.default.Fragment, null, formatTime(seconds));
};
exports.default = CountdownTimer;
