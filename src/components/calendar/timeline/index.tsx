import React from "react";
import { TimeSlot } from "../../../utils";

const Timeline = () => {
  return (
    <div className="time_slot">
      {TimeSlot.map((slot, index) => {
        return (
          <div style={{ top: slot.min }} className="slot">
            {/* timeline slot div */}
            <span
              style={
                slot.meridiem
                  ? { color: "var(--space-cadet)", fontWeight: 600 }
                  : { color: "gray", fontSize: ".8rem", fontWeight: 600 }
              }
            >
              {slot.label}
            </span>
            {slot.meridiem && <span>{slot.meridiem?.toUpperCase()}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
