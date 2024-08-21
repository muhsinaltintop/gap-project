import returnInfrastructure from "../../public/_mocks_/return_infrastructure.json"
import { getCountryList } from "../_utils/GlobalApi";
import headersForReturn from "../../public/_mocks_/data_description_for_return"
import SearchComponent from "../_components/SearchComponent";
import TransformReturns from "../_components/TransformReturns";

const ReturnInfrastructure = async () => {
  const countryList = await getCountryList();
  const transformedReturns = TransformReturns(returnInfrastructure)
  return <div className="w-9/12">
    <SearchComponent data={transformedReturns} countryList={countryList} headers={headersForReturn}/>
  </div>;
};

export default ReturnInfrastructure;
