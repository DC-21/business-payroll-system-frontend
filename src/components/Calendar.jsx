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
      calendar.push(<div key={i} className="calendar-day empty-day"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentDay = i === currentDay;
      const dayClassName = isCurrentDay
        ? "calendar-day current-day bg-red-500"
        : "calendar-day";

      calendar.push(
        <div key={i} className={dayClassName}>
          {i}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="w-full grid grid-cols-2">
      <div className="w-full flex">
        <div className="w-full bg-blue-200 flex flex-col items-center justify-center p-4">
          <h2 className="text-center text-lg mb-4">
            {currentDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </h2>
          <div className="w-full flex-grow grid grid-cols-7 gap-1 bg-slate-300">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <div
                  key={index}
                  className="calendar-day header-day gap-4 px-4 flex items-center justify-center"
                >
                  {day}
                </div>
              )
            )}
            {renderCalendar().map((day, index) => (
              <div
                key={index}
                className="calendar-day gap-4 px-4 flex items-center justify-center bg-white"
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex"></div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Calendar;
