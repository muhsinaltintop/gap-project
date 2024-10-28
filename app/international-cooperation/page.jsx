import React from "react";
import { getCountryList } from "../_utils/GlobalApi";
import SearchComponent from "../_components/SearchComponent";
import headersForInternational from "../../public/_mocks_/data_description_for_international.json";
import internationalCooperation from "../../public/_mocks_/internationalCooperation.json";
import TransformInternational from "../_components/TransformInternational";

const InternationalCooperation = async () => {
  const countryList = await getCountryList();
  const transformedInternational = TransformInternational(internationalCooperation)
  return (
  
  <div className="w-full mx-6">
    <SearchComponent data={transformedInternational} countryList={countryList} headers={headersForInternational}/>
    </div>
    );
};

export default InternationalCooperation;
