const MaxCalendarWidth = 600;
const MaxCalendarHeight = 720;

interface GetEventMatriceProps {
  maxColumn: number;
  eventColumnNumber: number;
  startTime: number;
  endTime: number;
}

export const useCalendarEventPositioner  = ({
  eventColumnNumber,
  maxColumn,
  startTime,
  endTime,
}: GetEventMatriceProps) => {
  // Calculating Height of event
  const height = Math.abs(endTime - startTime);
  // Calculating width of event
  const colWidth = MaxCalendarWidth / maxColumn;
  // Calculating left position of event
  const left = (eventColumnNumber - 1) * colWidth;
  // Calculating right position of event
  const right = (maxColumn - eventColumnNumber) * colWidth;
  // Calculating top position of event
  const top = startTime;

  return {
    height,
    width: colWidth,
    top,
    left,
    right,
  };
};
