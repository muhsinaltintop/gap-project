"use client";
import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import SelectYearsComponent from "./SelectYearsComponent";
import SearchBarComponent from "./SearchBarComponent";
import policies from "../../public/policies.json";
import Button from "../_components/_atoms/Button";
import TableComponent from "./TableComponent";

const SearchComponent = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const handleCountryChange = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const [startYear, setStartYear] = useState("");
  const handleStartYearChange = (year) => {
    setStartYear(year);
  };

  const [endYear, setEndYear] = useState("");
  const handleEndYearChange = (year) => {
    setEndYear(year);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPolicies, setFilteredPolicies] = useState([]);

  const handleSearch = () => {
    let filtered = policies.flatMap((country) => {
      if (
        selectedCountries.length === 0 ||
        selectedCountries.includes(country.countryName)
      ) {
        return country.policies
          .filter((policy) => {
            const policyYear = parseInt(policy.year);
            return (
              (!startYear || policyYear >= parseInt(startYear)) &&
              (!endYear || policyYear <= parseInt(endYear)) &&
              (searchTerm === "" ||
                policy.policyName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()))
            );
          })
          .map((policy) => ({ country: country.countryName, ...policy }));
      }
      return [];
    });
    setFilteredPolicies(filtered);
  };

  return (
    <div className="mx-4 first-line:flex flex-col">
      <h2 className="flex font-bold text-2xl mb-4">
        Policy/<span className="text-primary">Legislation</span>:
      </h2>
      <div className="flex flex-col gap-4">
        <CountrySelect
          selectedCountries={selectedCountries}
          onSelect={(country) => handleCountryChange(country)}
        />
        <SelectYearsComponent
          startYear={startYear}
          endYear={endYear}
          onStartYearChange={handleStartYearChange}
          onEndYearChange={handleEndYearChange}
        />
        <Button label={"Filter"} onClick={handleSearch} icon={false} />
        <SearchBarComponent
          title="Search with Key Terms..."
          value={searchTerm}
          onChange={(e) => e.target.value}
          placeholder="Enter a policy term..."
        />

        <TableComponent policies={filteredPolicies} />
      </div>
    </div>
  );
};

export default SearchComponent;
