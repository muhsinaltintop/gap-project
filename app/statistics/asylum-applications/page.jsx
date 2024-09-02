import ChartComponent from "../../_components/ChartComponent";
import { getAsylumApplications } from "../../_utils/GlobalApi";

const page = async () => {
  const asylumApplications = await getAsylumApplications();
  return (
    <div className="w-full mx-6">
      <ChartComponent data={asylumApplications} title="Asylum Application" />
      <ChartComponent data={asylumApplications} title="Temprorary Protection Status"/>
    </div>
  );
};

export default page;
