import React from "react";
import Timeline from "./timeline";
import { EventType } from "../../interfaces";
import { useGetConcurrentEvents } from "../../hooks/useGetConcurrentEvents";

interface CalendarProps {
  events: EventType[];
}
const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const eventsWithConcurrency = useGetConcurrentEvents(events);
  console.log(eventsWithConcurrency);
  return (
    <div className="calendar">
      {/* Timeline */}
      <div className="timeline">
        <Timeline />
      </div>
      {/* Events Canvas */}
      <div className="events"></div>
    </div>
  );
};

export default Calendar;
