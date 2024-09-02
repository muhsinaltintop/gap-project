import ChartComponent from "@/app/_components/ChartComponent";
import { getStockOfIrregularMigrants } from "../../_utils/GlobalApi";

const page = async () => {
  const stockOfIrregularMigrants = await getStockOfIrregularMigrants();
  return (
    <div className="w-full mx-6">
      <ChartComponent data={stockOfIrregularMigrants} title="Stock of Irregular Migrants" />
    </div>
  );
};

export default page;
