
const Calendar = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const renderCalendar = () => {
    const calendar = [];
    for (let i = 0; i < firstDayIndex; i++) {
      calendar.push(<div key={i} className="calendar-day"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentDay = i === currentDay;
      const dayClassName = isCurrentDay
        ? 'calendar-day current-day'
        : 'calendar-day';

      calendar.push(
        <div key={i} className={dayClassName}>
          {i}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="w-full flex bg-blue-200">
      <div className="calendar-header">
        <h2 className="calendar-title">
          {currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
