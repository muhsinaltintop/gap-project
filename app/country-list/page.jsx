import React from "react";
import CountryCard from "../_components/CountryCard";
import countryProfileData from "../../public/_mocks_/countryProfile.json";

const page = () => {
  return (
    <div className="country-list w-12/12 grid grid-cols-1">
      {countryProfileData.map((country, index) => (
        <div key={index}>
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
};

export default page;
