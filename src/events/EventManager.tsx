import IEvent from "./IEventManager";
import IEventProps from "./event_props/IEventProps";
import ISubscriber from "./subscribers/ISubscriber";

class EventManager<TProps extends IEventProps> implements IEvent<TProps> {
  subscribers: ISubscriber[];

  constructor(subscribers: ISubscriber[]) {
    this.subscribers = subscribers;
  }

  getUser(){
    return {
      name:"Default User"
    }
  }

  fire({ name, detail }: TProps) {
    this.subscribers.forEach((subscriber) =>
      subscriber.onEventFire({
        name,
        detail,
        user: this.getUser(),
        date: new Date()
      })
    );
  }
}

export default EventManager;
