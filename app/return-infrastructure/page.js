import SearchComponent from "../_components/SearchComponent";
import returnInfrastructure from "../../public/_mocks_/return_infrastructure.json"
import { getCountryList } from "../_utils/GlobalApi";

const ReturnInfrastructure = async () => {
  const countryList = await getCountryList();
  return <div className="w-9/12">
    <SearchComponent data={returnInfrastructure} countryList={countryList}></SearchComponent>
  </div>;
};

export default ReturnInfrastructure;
