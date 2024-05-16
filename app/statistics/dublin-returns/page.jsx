import ChartComponent from "@/app/_components/ChartComponent";
import data from "../../../public/_mocks_/dublin_returns.json";
const page = () => {
  return (
    <div>
      <ChartComponent data={data} />
    </div>
  );
};

export default page;
