import React from "react";
import CountryCard from "../_components/CountryCard";
import countryProfileData from "../../public/_mocks_/countryProfile.jsx";

const page = () => {
  return (
    <div className="country-list w-full grid grid-cols-1 mx-6">
      {countryProfileData.map((country, index) => (
        <div key={index}>
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
};

export default page;
