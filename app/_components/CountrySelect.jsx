import CheckBox from "./_atoms/CheckBox";
import countryList from "../../public/_mocks_/countryList.json";

const CountrySelect = ({ countryList, selectedCountries, onSelect }) => {
  return (
    <div>
      <h3 className="font-bold">Select the Countries</h3>
      {countryList.map((country) => (
        <div key={country.id} className="flex float-left mt-1">
          <CheckBox
            id={country.countryName}
            label={country.countryName}
            checked={selectedCountries.includes(country.countryName)}
            onChange={() => onSelect(country.countryName)}
          />
        </div>
      ))}
    </div>
  );
};

export default CountrySelect;
