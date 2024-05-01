import React from "react";
import { EventType } from "../interfaces";

export const useGetConcurrentEvents = (events: EventType[]) => {
  const areConcurrent = (event1: EventType, event2: EventType) => {
    return (
      (event1.start >= event2.start && event1.start < event2.end) ||
      (event2.start >= event1.start && event2.start < event1.end)
    );
  };

  const findConcurrentEvents = (events: EventType[]) => {
    const concurrentEvents = [];

    for (let i = 0; i < events.length; i++) {
      let added = false;
      for (let j = 0; j < concurrentEvents.length; j++) {
        if (
          concurrentEvents[j].some((event) => areConcurrent(event, events[i]))
        ) {
          concurrentEvents[j].push(events[i]);
          added = true;
          break;
        }
      }
      if (!added) {
        concurrentEvents.push([events[i]]);
      }
    }

    return concurrentEvents;
  };

  return findConcurrentEvents(events);
};
