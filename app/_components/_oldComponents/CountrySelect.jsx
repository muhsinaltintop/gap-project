const CountrySelect = ({ selectedCountries, onSelect, countries }) => {
  return (
    <div>
      <p>Select Countries:</p>
      {countries.map((country) => (
        <div key={country.countryName} style={{ float: "left" }}>
          <input
            type="checkbox"
            id={country.countryName}
            checked={selectedCountries.includes(country.countryName)}
            onChange={() => onSelect(country.countryName)}
          />
          <label htmlFor={country.countryName}>{country.countryName}</label>
        </div>
      ))}
    </div>
  );
};

export default CountrySelect;
