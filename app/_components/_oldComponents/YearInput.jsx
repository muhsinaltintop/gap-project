const YearInput = ({
  startYear,
  endYear,
  onStartYearChange,
  onEndYearChange,
}) => {
  return (
    <div>
      <div>
        <label>Start Year: </label>
        <input
          className="border-black my-4"
          type="text"
          value={startYear}
          onChange={onStartYearChange}
        />
      </div>
      <div>
        <label>End Year: </label>
        <input type="text" value={endYear} onChange={onEndYearChange} />
      </div>
    </div>
  );
};

export default YearInput;
