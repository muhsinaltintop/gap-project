import ChartComponent from "../../_components/ChartComponent";
import { getAsylumApplications, getTps } from "../../_utils/GlobalApi";


const page = async () => {
  const asylumApplications = await getAsylumApplications();
  const tps = await getTps();
  return (
    <div className="w-full mx-6">
      <ChartComponent data={asylumApplications} title="Asylum Application" />
      <ChartComponent data={tps} title="Temprorary Protection Status"/>
    </div>
  );
};

export default page;
