import CountryNameFormatter from "../_helper/CountryNameFormatter";
import CheckBox from "./_atoms/CheckBox";

const CountrySelect = ({ countryList, selectedCountries, onSelect }) => {
  return (
    <div>
      <h3 className="font-bold mt-4">Select Countries:</h3>
      <div className="grid grid-cols-7 gap-2">
        {countryList.map((country) => (
          <div key={country.id}>
            <CheckBox
              id={country.countryName}
              label={CountryNameFormatter(country.countryName)}
              checked={selectedCountries.includes(country.countryName)}
              onChange={() => onSelect(country.countryName)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySelect;
