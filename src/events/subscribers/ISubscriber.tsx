import IEvent from "../IEvent";

interface ISubscriber{
  onEventFire: <T extends IEvent>(event: T) => void
}

export default ISubscriber;