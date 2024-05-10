import DropDown from "./_atoms/DropDown";
import years from "../../public/_mocks_/years.json";

const SelectYearsComponent = ({
  startYear,
  endYear,
  onStartYearChange,
  onEndYearChange,
}) => {
  return (
    <div className="flex gap-4 mt-2">
      <DropDown
        label="Start Year"
        options={years}
        value={startYear}
        onChange={onStartYearChange}
      />
      <DropDown
        label="End Year"
        options={years}
        value={endYear}
        onChange={onEndYearChange}
      />
    </div>
  );
};

export default SelectYearsComponent;
