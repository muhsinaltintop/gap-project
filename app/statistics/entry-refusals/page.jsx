import ChartComponent from "../../_components/ChartComponent";
import { getPushBacks } from "../../_utils/GlobalApi";

const page = async () => {
  const pushbacks = await getPushBacks();
  return (
    <div className="w-full mx-6">
      <ChartComponent data={pushbacks} title="Entry Refusals" />
    </div>
  );
};

export default page;
