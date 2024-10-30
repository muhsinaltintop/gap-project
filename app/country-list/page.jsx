import React from "react";
import CountryCard from "../_components/CountryCard";
import countryProfileData from "../../public/_mocks_/countryProfile.jsx";

const page = () => {
  const sortedCountryData = countryProfileData.sort((a, b) => 
    a.countryName.localeCompare(b.countryName)
  );
  return (
    <div className="country-list w-full grid grid-cols-1 mx-6">
      {sortedCountryData.map((country, index) => (
        <div key={index}>
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
};

export default page;
