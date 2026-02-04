import { useRef } from "react";

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }) {
  const startX = useRef(null);

  const onTouchStart = (e) => {
    startX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = startX.current - endX;

    if (deltaX > threshold) onSwipeLeft();
    if (deltaX < -threshold) onSwipeRight();

    startX.current = null;
  };

  return { onTouchStart, onTouchEnd };
}
