import React from 'react'
import { useState, useEffect } from 'react';

const useTimer = () => {
    const initialMinute = 1;
    const initialSeconds = 0;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                }
                else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {minutes === 0 && seconds === 0
                ? null
                : <h5> {minutes} minutes {seconds < 10 ? `0${seconds}` : seconds} seconds</h5>
            }
        </div>
    )
}

export default useTimer;