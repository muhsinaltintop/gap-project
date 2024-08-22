import ChartComponent from "../../_components/ChartComponent";
import { getAsylumApplications } from "../../_utils/GlobalApi";

const page = async () => {
  const asylumApplications = await getAsylumApplications();
  return (
    <div className="w-full mx-6">
      <ChartComponent data={asylumApplications} />
    </div>
  );
};

export default page;
