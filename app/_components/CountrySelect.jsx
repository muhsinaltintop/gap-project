import CheckBox from "./_atoms/CheckBox";

const CountrySelect = ({ countryList, selectedCountries, onSelect }) => {
  return (
    <div>
      <h3 className="font-bold mt-4">Select Countries</h3>
      <div className="grid grid-cols-7 gap-2">
        {countryList.map((country) => (
          <div key={country.id}>
            <CheckBox
              id={country.countryName}
              label={country.countryName.charAt(0).toUpperCase() + country.countryName.slice(1)}
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
