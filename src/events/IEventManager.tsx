import IEventProps from "./event_props/IEventProps";

interface IEventManager<TProps extends IEventProps>{
  fire: (props: TProps) => void
}

export default IEventManager;