import IEvent from "../IEvent";
import IAnalyticData from "./IAnalyticData";
import ISubscriber from "./ISubscriber";

class Analytics implements ISubscriber {
  onEventFire<T extends IEvent>({ name, detail, date, user }: T) {
    this.sendData({ name: name, detail, date, customer: user });
  }

  sendData(data: IAnalyticData) {
    console.log("analytic data sended!", data);
  }
}

export default Analytics;
