"use client";
import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import SelectYearsComponent from "./SelectYearsComponent";
import SearchBarComponent from "./SearchBarComponent";
import Button from "../_components/_atoms/Button";
import TableComponent from "./TableComponent";
import { usePathname } from "next/navigation";

const SearchComponent = ({ data, countryList, headers }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const pathName = usePathname();

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


    let filtered = data.flatMap((country) => {
     

      if (
        selectedCountries.length === 0 ||
        selectedCountries.includes(country.countryName)
      ) {
    

        return country.policies
          .filter((policy) => {
            const policyDate = new Date(policy.announcedYear);
            const policyYear = policyDate.getFullYear();
            const matchesYear =
              (!startYear || policyYear >= parseInt(startYear)) &&
              (!endYear || policyYear <= parseInt(endYear));
            const matchesTerm =
              searchTerm === "" ||
              policy.policyName.toLowerCase().includes(searchTerm.toLowerCase());

        

            return matchesYear && matchesTerm;
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
        {pathName === "/policy-legislation-map"
          ? "Policy/Legislation"
          : pathName === "/return-infrastructure"
          ? "Return Infrastructure"
          : ""}
      </h2>
      <p className="font-light">*Last Updated 26/06/2024</p>

      { pathName === "/policy-legislation-map"
          ? <div className="text-justify">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at
        eum dignissimos atque sint qui amet nihil cupiditate harum officiis?
        Necessitatibus non explicabo architecto eveniet itaque labore quaerat
        provident tenetur? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatibus at eum dignissimos atque sint qui amet nihil
        cupiditate harum officiis? Necessitatibus non explicabo architecto
        eveniet itaque labore quaerat provident tenetur?Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatibus at eum dignissimos atque
        sint qui amet nihil cupiditate harum officiis? Necessitatibus non
        explicabo architecto eveniet itaque labore quaerat provident
        tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus at eum dignissimos atque sint qui amet nihil cupiditate
        harum officiis? Necessitatibus non explicabo architecto eveniet itaque
        labore quaerat provident tenetur?
          </p>
          </div>
          : pathName === "/return-infrastructure"
          ?  
        <div>
          <p>Return Migration Infrastructure maps the programs and projects launched by state agencies or
            international organisations to enable the return of people to their country of origin or who
            migrate to a country willing to receive them.</p> 
            <p>
            This section examines how return migration governance is put in practice, including how
            different actors collaborate or work against each other, and what discrepancies (or indeed
            ‘GAPS’) emerge and maintain to exist in their daily operation of return migration, in Europe and
            beyond. Positioning the Return Migration Infrastructure as the meso-level, all micro-level
            analysis on migrant decisions, their aspirations and experiences is out of scope.</p>
        </div>
          : ""}
      <div className="flex flex-col gap-4">
        <CountrySelect
          countryList={countryList}
          selectedCountries={selectedCountries}
          onSelect={(country) => handleCountryChange(country)}
        />
        <SelectYearsComponent
          startYear={startYear}
          endYear={endYear}
          onStartYearChange={handleStartYearChange}
          onEndYearChange={handleEndYearChange}
        />
        <Button
          label={"Filter"}
          onClick={handleSearch}
          icon={false}
          customCSS={"bg-primary w-20 content-center text-white"}
        />
        <SearchBarComponent
          title="Search with Key Terms..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Enter a policy term..."
        />
        <Button
          label={"Search"}
          onClick={handleSearch}
          icon={false}
          customCSS={"bg-primary w-20 text-white"}
        />

        <TableComponent
          policies={filteredPolicies}
          headers={headers}
          pathName={pathName}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
