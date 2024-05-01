import React from "react";
import Timeline from "./timeline";
import { EventType } from "../../interfaces";
import { useGetConcurrentEvents } from "../../hooks/useGetConcurrentEvents";
import ConcurrentEvent from "./concurrentEvents";

export interface CalendarProps {
  events: EventType[];
}
const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const eventsWithConcurrency = useGetConcurrentEvents(events);
  //   console.log(eventsWithConcurrency);
  return (
    <div className="calendar">
      {/* Timeline */}
      <div className="timeline">
        <Timeline />
      </div>
      {/* Events Canvas */}
      <div className="events_container">
        <div className="event_canvas">
          {/* rendering array of array consisting the concurrency of event */}
          {eventsWithConcurrency.map(
            (concurrentEvents: EventType[], index: number) => (
              <ConcurrentEvent events={concurrentEvents} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
