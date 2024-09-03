import ChartComponent from "../../_components/ChartComponent";
import { getReturnByCitizenship } from "../../_utils/GlobalApi";

const page = async () => {
  const germany = await getReturnByCitizenship("ge");
  const greece = await getReturnByCitizenship("gr");

  return (
    <div className="w-full mx-6">
      <ChartComponent data={germany} title="Return by Citizenship"/>
    </div>
  );
};

export default page;
