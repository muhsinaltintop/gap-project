const DropDown = ({ label, options, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="DropDownSelect"
        className="block text-sm font-bold text-gray-900"
      >
        {label}
      </label>

      <select
        name="DropDownSelect"
        id="DropDownSelect"
        className="mt-1.5 w-min rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        value={value}
        onChange={handleChange}
      >
        <option value="">Please select</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
