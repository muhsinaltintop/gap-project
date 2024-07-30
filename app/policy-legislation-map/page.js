import headersForPolicy from "../../public/_mocks_/data_description_for_policy.json";
import policies from "../../public/_mocks_/policies.json";
import { getCountryList } from "../_utils/GlobalApi";
import SearchComponent from "../_components/SearchComponent";


const PolicyLegislationPage = async () => {
  const countryList = await getCountryList();
  
  return (
    <div className="w-9/12">
      <SearchComponent data={policies} countryList={countryList} headers={headersForPolicy} />
    </div>
  );
};

export default PolicyLegislationPage;
