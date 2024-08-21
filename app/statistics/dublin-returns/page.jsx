import ChartComponent from "@/app/_components/ChartComponent";
import { getDublinReturns } from "@/app/_utils/GlobalApi";

const page = async () => {
  const dublinReturns = await getDublinReturns();
  return (
    <div className="w-full mx-6">
      <ChartComponent data={dublinReturns} />
    </div>
  );
};

export default page;
