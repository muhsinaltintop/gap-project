"use client";
import React, { useState } from "react";
import policiesData from "../../public/policies.json";
import SearchInput from "./SearchInput";
import CountrySelect from "./CountrySelect";
import YearInput from "./YearInput";
import PolicyList from "./PolicyList";
import { Button } from "@/components/ui/button";

const SearchComponent = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPolicies, setFilteredPolicies] = useState([]);

  const handleCountryChange = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const handleSearch = () => {
    let filtered = policiesData.flatMap((country) => {
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
    <div>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by policy title or country"
      />
      <CountrySelect
        selectedCountries={selectedCountries}
        onSelect={(country) => handleCountryChange(country)}
        countries={policiesData}
      />
      <br />
      <YearInput
        startYear={startYear}
        endYear={endYear}
        onStartYearChange={handleStartYearChange}
        onEndYearChange={handleEndYearChange}
      />
      <div className="my-4">
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <PolicyList policies={filteredPolicies} />
    </div>
  );
};

export default SearchComponent;
