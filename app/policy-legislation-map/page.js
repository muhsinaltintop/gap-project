import React from "react";
import SearchComponent from "../_components/SearchComponent";
import policies from "../../public/_mocks_/policies.json";

const PolicyLegislationPage = () => {
  return (
    <div>
      <SearchComponent data={policies} />
    </div>
  );
};

export default PolicyLegislationPage;
