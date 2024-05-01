import React from "react";
import Timeline from "./timeline";

const Calendar = () => {
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
