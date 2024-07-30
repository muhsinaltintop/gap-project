import returnInfrastructure from "../../public/_mocks_/return_infrastructure.json"
import { getCountryList } from "../_utils/GlobalApi";
import headersForReturn from "../../public/_mocks_/data_description_for_return"
import SearchComponent from "../_components/SearchComponent";

const ReturnInfrastructure = async () => {
  const countryList = await getCountryList();
  return <div className="w-9/12">
    <SearchComponent data={returnInfrastructure} countryList={countryList} headers={headersForReturn}></SearchComponent>
  </div>;
};

export default ReturnInfrastructure;
