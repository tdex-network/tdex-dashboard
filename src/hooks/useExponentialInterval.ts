import type { AnyAction } from '@reduxjs/toolkit';
import { useEffect, useReducer, useRef } from 'react';

type Delay = number | null;
type TimerHandler = (...args: any[]) => void;

const reducer = (state: Delay, action: AnyAction) => {
  // Start at 125ms, double 5 times = 4000
  if (state === null || state >= 4_000) return state;
  switch (action.type) {
    case 'DOUBLE':
      return state * 2;
    default:
      return state;
  }
};

/**
 * Interval fast exponential until 4 secs, then linear
 *
 * @param callback - Function that will be called every `delay` ms.
 * @param initialDelay - Number representing the initial delay in ms. Set to `null` to "pause" the interval.
 */
export const useExponentialInterval = (callback: TimerHandler, initialDelay: Delay): void => {
  const savedCallbackRef = useRef<TimerHandler>();
  const [delayExp, dispatch] = useReducer(reducer, initialDelay);
  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args: any[]) => {
      savedCallbackRef.current!(...args);
      dispatch({ type: 'DOUBLE' });
    };
    if (delayExp !== null) {
      const intervalId = setInterval(handler, delayExp);
      return () => clearInterval(intervalId);
    }
  }, [initialDelay, delayExp]);
};
