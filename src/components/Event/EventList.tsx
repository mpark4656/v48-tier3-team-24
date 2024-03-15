import EventListItem from "./EventItem";
import type { EventItemType } from "./EventItem";

interface EventListProps {
  events: EventItemType[];
}

export const EventList = (props: EventListProps) => {
  return (
    <div className="md:10 lg:20 grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">
      {props.events.map((event) => {
        return <EventListItem event={event} key={event.id}/>;
      })}
    </div>
  );
};
