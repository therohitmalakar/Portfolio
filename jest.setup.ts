import "@testing-library/jest-dom";

if (!global.requestAnimationFrame) {
  global.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 0) as unknown as number;
}

