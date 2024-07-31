function SelectTime() {
  const startTime = new Date();
  startTime.setHours(8, 0, 0); // Start time at 8:00 AM

  const endTime = new Date();
  endTime.setHours(22, 0, 0); // End time at 10:00 PM

  const timeIncrement = 30; // Increment in minutes

  const timeOptions = [];

  for (
    let time = new Date(startTime);
    time <= endTime;
    time = new Date(time.getTime() + timeIncrement * 60000)
  ) {
    const hours = time.getHours() % 12 || 12; // Handle 12-hour format
    const amPm = time.getHours() >= 12 ? "pm" : "am";
    const formattedTime = `${hours}:${
      time.getMinutes() < 10 ? "0" : ""
    }${time.getMinutes()} ${amPm}`;
    timeOptions.push(
      <option key={formattedTime} value={formattedTime}>
        {formattedTime}
      </option>
    );
  }

  return (
    <select
      className="peer py-4 w-full bg-transparent placeholder-transparent px-2 ring-neutral/60 border-b focus:outline-none focus:ring-base-100 focus:border-base-content/60"
      name="time"
      id="time"
    >
      {timeOptions}
    </select>
  );
}

export default SelectTime;
