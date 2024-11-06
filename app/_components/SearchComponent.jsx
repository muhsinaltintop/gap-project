"use client";
import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import SelectYearsComponent from "./SelectYearsComponent";
import SearchBarComponent from "./SearchBarComponent";
import Button from "../_components/_atoms/Button";
import TableComponent from "./TableComponent";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SearchComponent = ({ data, countryList, headers }) => {
  const sortedCountryData = countryList.sort((a, b) => 
    a.countryName.localeCompare(b.countryName)
  );
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
        selectedCountries.some((selectedCountry) => selectedCountry.toLowerCase() === country.countryName.toLowerCase())
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
    <div className="mx-2 first-line:flex flex-col max-w-7xl">
      <div className="w-11/12">
      <h2 className="flex font-bold text-lg mb-4">
        {pathName === "/policy-legislation"
          ? "Policy/Legislation"
          : pathName === "/return-infrastructure"
          ? "Return Infrastructure"
          : pathName === "/international-cooperation"? "International Cooperation" :""}
      </h2>
      <p className="font-light">*Last Updated 26/06/2024</p>

      { pathName === "/policy-legislation"
          ? <div className="text-justify text-sm">
          <p className="mt-1">
          The section has been developed by national immigration experts to address national-level return legislation and policies in the countries covered in the GAPs project. It maps national legislations which set out the principles of public policy on asylum, border management, residence, deportation and return. It also covers the regulations which are designed to implement these principles, bringing legislation into effect. The legislation and regulations can take the form of entitled acts, laws, statutes, directives, decisions, guidelines, administrative rules and others. They are a kind of binding laws. Legal arrangements on international agreements will be presented in another section, <Link className="text-primary font-bold" href="/international-cooperation">International Cooperation</Link>. 
          </p>
          <p className="mt-2">
          Each entry includes direct links to the official and translated versions of legislation and regulations, the relevant date, type, policy area, basic description, and additional notes. Descriptions of the entries are also included at the top of the table as well. A key feature of this section is its robust search functionality. Policy legislations can be searched by entering the issuing country name, start/end year or key terms. This provides a chronological view of entries and facilitates cross-country comparisons. All entries can also be downloaded as PDF/Excel documents.
          </p>
          <p className="mt-2">
          Use the dropdown menus or the search tool below to find a specific policy. 
          </p>
          </div>
          : pathName === "/return-infrastructure"
          ?  
        <div className="text-justify text-sm">
          <p className="mt-1">
            Return Migration Infrastructure maps the programs and projects launched by returning state’ agencies or international organisations to enable the return of people to their country of origin or who migrate to a country willing to receive them. It also covers programs designed for readmission and reintegration of returnees in the country of origin. Mapping of actors, targets, and types of these programs and projects is of importance to understand how return migration governance is put into practice by returning states and how it is operated in the county of origin.
          </p>
        </div>
          : "/international-cooperation" ? 
          <div className="text-justify text-sm">
            <p className="mt-1">This section has been developed to capture international cooperation instruments on return and readmission procedures, particularly since 2015. These include standard bilateral readmission agreements as well as non-standard return cooperation instruments and arrangements, such as deals, statements, standard operating procedures, joint ways forward on migration issues and joint declarations.
            </p>
            <p className="mt-2">Each entry includes the names of the signatories, the year of signature or type of cooperation instrument, web links to the original agreement if available. International cooperation items can be searched by entering the signing countries, relevant date or key terms. All entries can also be downloaded as a PDF/Excel document.
            </p>
          </div> 
          : "" }
      <div className="flex flex-col gap-4">
        <CountrySelect
          countryList={sortedCountryData}
          selectedCountries={selectedCountries}
          onSelect={(country) => handleCountryChange(country)}
        />
        {pathName == "/policy-legislation" ?
          <div>

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
              customCSS={"bg-primary w-20 content-center text-white mt-2"}
              />
          </div> : ""

        }
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
        </div>
        <div className="w-full">
          <TableComponent
            policies={filteredPolicies}
            headers={headers}
            pathName={pathName}
            selectedCountries={selectedCountries}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
