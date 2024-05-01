import React from "react";
import { EventType } from "../../../interfaces";
import { useGetEventColulmnNumbersAndMaxColumn } from "../../../hooks/useGetEventColulmnNumbersAndMaxColumn";
import EventCard from "./eventCard";

interface ConcurrentEventProps {
  events: EventType[];
}
const ConcurrentEvent: React.FC<ConcurrentEventProps> = ({ events }) => {
  //   console.log(events);
  const { EventColumnNumbers, MaxColumn } =
    useGetEventColulmnNumbersAndMaxColumn(
      events.map((event) => [event.start, event.end])
    );
  //   console.log(EventColArray, MaxCol);

  return (
    <>
      {events.map((event, index) => (
        <EventCard
          key={index}
          event={event}
          eventColumnNumber={EventColumnNumbers[index]}
          maxColumn={MaxColumn}
        />
      ))}
    </>
  );
};

export default ConcurrentEvent;
