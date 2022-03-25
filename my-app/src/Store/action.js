export function increment() {
  return {
    type: "increment",
  };
}

export function decrement() {
  return {
    type: "decrement",
  };
}

export function reset() {
  return {
    type: "reset",
  };
}

export function updateState(step) {
  return {
    type: "changeState",
    payload: step,
  };
}
