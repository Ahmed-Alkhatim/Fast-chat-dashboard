
type EventDetail = Record<string, any>; // Define a type for event details

const eventTarget = new EventTarget();

export const emitEvent = <T extends EventDetail>(eventName: string, detail: T): void => {
  const event = new CustomEvent<T>(eventName, { detail });
  eventTarget.dispatchEvent(event);
};

export const subscribeToEvent = <T extends EventDetail>(
  eventName: string,
  callback: (detail: T) => void
): (() => void) => {
  const listener = (event: Event) => {
    const customEvent = event as CustomEvent<T>;
    callback(customEvent.detail);
  };

  eventTarget.addEventListener(eventName, listener);

  // Return an unsubscribe function
  return () => {
    eventTarget.removeEventListener(eventName, listener);
  };
};
