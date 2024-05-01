import React from "react";
import { EventType } from "../../../../interfaces";
import { useCalendarEventPositioner } from "../../../../hooks/useCalendarEventPositioner";

interface EventCardProps {
  event: EventType;
  eventColumnNumber: number;
  maxColumn: number;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  eventColumnNumber,
  maxColumn,
}) => {
  //   console.log(event, colNo, maxCol);

  const { top, left, right, height, width } = useCalendarEventPositioner({
    eventColumnNumber,
    maxColumn,
    startTime: event.start,
    endTime: event.end,
  });

  //   console.log(
  //     `top:${top}, left:${left}, right:${right}, height:${height}, width:${width}`
  //   );

  return (
    <div style={{ height, top, width, left, right }} className="event_card">
      <div className="event_card_bar" style={{ width: "5px" }}></div>
      <div
        style={{
          height: `calc(${height}px - 2px)`,
          width: `calc(${width}px - 5px)`,
        }}
        className="event_card_content"
      >
        <h4>Sample Item</h4>
        <p>Sample Location</p>
      </div>
    </div>
  );
};

export default EventCard;
