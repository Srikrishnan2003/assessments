import { useState, useEffect, useCallback } from 'react';

export function useTimer(initialMinutes = 120, onTimeUp = () => { }) {
    const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setIsRunning(false);
                        onTimeUp();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, timeLeft, onTimeUp]);

    const start = useCallback(() => setIsRunning(true), []);
    const pause = useCallback(() => setIsRunning(false), []);
    const reset = useCallback((minutes = initialMinutes) => {
        setTimeLeft(minutes * 60);
        setIsRunning(false);
    }, [initialMinutes]);

    const formatTime = useCallback(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, [timeLeft]);

    return {
        timeLeft,
        isRunning,
        start,
        pause,
        reset,
        formatTime,
        percentage: (timeLeft / (initialMinutes * 60)) * 100
    };
}

export default useTimer;
