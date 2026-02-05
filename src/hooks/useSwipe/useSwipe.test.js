import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import { useSwipe } from "./useSwipe";

function createTouchEvent(x) {
  return {
    targetTouches: [{ clientX: x }],
    changedTouches: [{ clientX: x }],
  };
}

describe("useSwipe", () => {
  it("Executa onSwipeLeft quando o swipe ultrapassa o threshold para a esquerda", () => {
    const onSwipeLeft = vitest.fn();
    const onSwipeRight = vitest.fn();

    const { result } = renderHook(() =>
      useSwipe({ onSwipeLeft, onSwipeRight }),
    );

    act(() => {
      result.current.onTouchStart(createTouchEvent(200));
      result.current.onTouchEnd(createTouchEvent(100));
    });

    expect(onSwipeLeft).toHaveBeenCalledTimes(1);
    expect(onSwipeRight).not.toHaveBeenCalled();
  });

  it("Executa onSwipeRight quando o swipe ultrapassa o threshold para a direita", () => {
    const onSwipeLeft = vitest.fn();
    const onSwipeRight = vitest.fn();

    const { result } = renderHook(() =>
      useSwipe({ onSwipeLeft, onSwipeRight }),
    );

    act(() => {
      result.current.onTouchStart(createTouchEvent(100));
      result.current.onTouchEnd(createTouchEvent(200));
    });

    expect(onSwipeRight).toHaveBeenCalledTimes(1);
    expect(onSwipeLeft).not.toHaveBeenCalled();
  });

  it("Nao executa swipe quando o valor do threshold nao é ultrapassado", () => {
    const onSwipeLeft = vitest.fn();
    const onSwipeRight = vitest.fn();

    const { result } = renderHook(() =>
      useSwipe({ onSwipeLeft, onSwipeRight }),
    );

    act(() => {
      result.current.onTouchStart(createTouchEvent(200));
      result.current.onTouchEnd(createTouchEvent(170));
    });

    expect(onSwipeLeft).not.toHaveBeenCalled();
    expect(onSwipeRight).not.toHaveBeenCalled();
  });
});
