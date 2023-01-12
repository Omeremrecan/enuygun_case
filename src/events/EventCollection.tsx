import EventManager from "./EventManager";
import Analytics from "./subscribers/Analytics";

export const SimpleEvent = new EventManager([
  new Analytics()
])

