import headersForPolicy from "../../public/_mocks_/data_description_for_policy.json";
import policies from "../../public/_mocks_/policies.json";
import { getCountryList } from "../_utils/GlobalApi";
import SearchComponent from "../_components/SearchComponent";
import TransformPolicies from "../_components/TransformPolicies";


const PolicyLegislationPage = async () => {
  const countryList = await getCountryList();
  const transformedPolicies = TransformPolicies(policies)
  return (
    <div className="w-9/12">
      <SearchComponent data={transformedPolicies} countryList={countryList} headers={headersForPolicy} />
    </div>
  );
};

export default PolicyLegislationPage;
