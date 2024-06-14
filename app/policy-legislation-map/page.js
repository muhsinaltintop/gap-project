import SearchComponent from "../_components/SearchComponent";
import policies from "../../public/_mocks_/policies.json";
import { getCountryList } from "../_utils/GlobalApi";

const PolicyLegislationPage = async () => {
  const countryList = await getCountryList();
  return (
    <div>
      <SearchComponent data={policies} countryList={countryList} />
    </div>
  );
};

export default PolicyLegislationPage;
