import ChartComponent from "../../_components/ChartComponent";
import { getReturnByCitizenshipGe } from "../../_utils/GlobalApi";

const page = async () => {
  const returnByCitizenship = await getReturnByCitizenshipGe();
  return (
    <div className="w-full mx-6">
      <ChartComponent data={returnByCitizenship} title="Return by Citizenship"/>
    </div>
  );
};

export default page;
